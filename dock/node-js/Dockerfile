# 이미지 베이스
FROM node:10

# 작업 디렉토리
WORKDIR /usr/src/app

# 패키지를 컨테이너 안으로 넣어야
COPY package.json ./

# 설치
RUN npm install

# 디렉토리 모든 파일 복사해 다시 컨테이너로
COPY ./ ./

CMD ["npx", "nodemon", "server.js"]