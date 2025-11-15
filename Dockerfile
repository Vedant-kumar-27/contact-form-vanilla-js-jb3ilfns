FROM us-central1-docker.pkg.dev/recompose-stellar/base/image

COPY package*.json ./

RUN npm ci

COPY src/ ./src/
COPY server/ ./server/
COPY index.html ./
COPY vite.config.js ./
COPY jest.config.js ./
COPY eslint.config.js ./

WORKDIR /app

CMD ["/bin/sh", "/scripts/run-tests.sh"]

