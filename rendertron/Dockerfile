FROM node
RUN apt-get update && \
  apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
  libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
RUN git clone https://github.com/GoogleChrome/rendertron.git
WORKDIR rendertron
RUN npm install
RUN npm run build
RUN echo '{ "puppeteerArgs": \
  ["--headless", "--disable-gpu", "-remote-debugging-address=0.0.0.0", "--no-sandbox", "--disable-breakpad", \
  "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gl-drawing-for-tests", \
  "--disable-accelerated-2d-canvas",  "--disable-canvas-aa", "--disable-2d-canvas-clip-aa", "--disable-3d-apis", \
  "--no-first-run", "--no-zygote", "--single-process", "--disable-account-consistency", \
  "--disable-input-view", \
  "--blink-settings=imagesEnabled=false,downloadableBinaryFontsEnabled=false,webSecurityEnabled=false,cookieEnabled=false", \
  "--disable-web-security", "--disable-desktop-notifications", "--disable-extensions", "--disable-gpu-driver-bug-workarounds", \
  "--disable-permissions-api", "--disable-sync", "--autoplay-policy=no-user-gesture-required", \
  "--hide-scrollbars", "--ignore-certificate-errors", "disabled-by-default-memory-infra"] }' \
  > config.json
CMD ["npm", "start"]