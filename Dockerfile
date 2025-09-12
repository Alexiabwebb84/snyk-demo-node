FROM node:8

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --unsafe-perm

COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]