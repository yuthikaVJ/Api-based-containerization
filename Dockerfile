FROM node:trixie-slim
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js