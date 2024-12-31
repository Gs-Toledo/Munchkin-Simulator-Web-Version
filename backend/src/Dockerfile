
FROM node:14


WORKDIR /app


COPY package*.json ./


RUN npm install

# Copie todo o código da aplicação para o contêiner
COPY . .


RUN npm run build


EXPOSE 3000 8080


CMD ["node", "dist/server.ts"]
