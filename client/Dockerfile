FROM node:14-alpine as build

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build

FROM nginx:1.17-alpine

# root 에 app/build 생성
RUN mkdir /app && cd /app && mkdir /build

# work dir 고정 
WORKDIR /app 

COPY --from=build /usr/src/app/build ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
	