# Node.js 18 をベースイメージとして使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

RUN npm install -g create-vite@latest

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD [ "/entrypoint.sh" ]
