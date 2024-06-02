# Node.js 18 をベースイメージとして使用
FROM node:18-alpine

WORKDIR /app

# vite-project ディレクトリをコピー
COPY ./vite-project /app/vite-project

# 作業ディレクトリを設定
WORKDIR /app/vite-project

# 依存関係をインストール
RUN npm install

# 開発サーバーを起動
CMD ["npm", "run", "dev"]