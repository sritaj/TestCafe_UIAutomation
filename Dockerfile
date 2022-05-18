FROM cypress/base:16.14.2-slim

USER root

RUN node --version

# ----------------------- Configuring Browsers for Test Run in Docker Container ----------------------- #
# Install dependencies
RUN apt-get update && \
  apt-get install -y \
  fonts-liberation \
  git \
  libcurl4 \
  libcurl3-gnutls \
  libcurl3-nss \
  xdg-utils \
  wget \
  curl \
  # firefox dependencies
  bzip2 \
  # add codecs needed for video playback in firefox
  # https://github.com/cypress-io/cypress-docker-images/issues/150
  mplayer \
  # edge dependencies
  gnupg \
  dirmngr \
  # clean up
  && rm -rf /var/lib/apt/lists/* \
  && apt-get clean

# install libappindicator3-1 - not included with Debian 11
RUN wget --no-verbose /usr/src/libappindicator3-1_0.4.92-7_amd64.deb "http://ftp.us.debian.org/debian/pool/main/liba/libappindicator/libappindicator3-1_0.4.92-7_amd64.deb" && \
  dpkg -i /usr/src/libappindicator3-1_0.4.92-7_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/libappindicator3-1_0.4.92-7_amd64.deb

# install Chrome browser
RUN wget --no-verbose -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_100.0.4896.88-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb

# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

# install Firefox browser
RUN wget --no-verbose -O /tmp/firefox.tar.bz2 https://download-installer.cdn.mozilla.net/pub/firefox/releases/99.0.1/linux-x86_64/en-US/firefox-99.0.1.tar.bz2 && \
  tar -C /opt -xjf /tmp/firefox.tar.bz2 && \
  rm /tmp/firefox.tar.bz2 && \
  ln -fs /opt/firefox/firefox /usr/bin/firefox

RUN echo "Downloading Latest Edge version..."

# ## Setup Edge
# RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
# RUN install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
# RUN sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list'
# RUN rm microsoft.gpg

# ## Install Edge
# RUN apt-get update
# RUN apt-get install -y microsoft-edge-dev

# # Add a link to the browser that allows Cypress to find it
# RUN ln -s /usr/bin/microsoft-edge /usr/bin/edge


# a few environment variables to make NPM installs easier
# good colors for most applications
ENV TERM=xterm
# avoid million NPM install messages
ENV npm_config_loglevel=warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm=true

# ----------------------- Configuring Dependencies for TestCafe Project ----------------------- #
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# installing the packages
RUN npm install --production

# installing project dependencies
RUN npm install -g testcafe
RUN npm install testcafe-reporter-html
RUN npm install testcafe-reporter-allure
RUN npm install testcafe-reporter-list
RUN npm install xpath-to-css
RUN npm install @ffmpeg-installer/ffmpeg
RUN npm install --save @ffmpeg-installer/ffmpeg

COPY . .

CMD ["bash"]

# TODO - Not taking the Test Path, need to fix
# Entrypoint for docker compose for running the Tests in specified Browser and setting the Concurrency
ENTRYPOINT testcafe -c ${CONCURRENCY} ${BROWSER} test --reporter html:test-artifacts/reports/reporter.html 
