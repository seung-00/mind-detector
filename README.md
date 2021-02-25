# mind-detector

마음을 읽어주는 AI 우울감 자가진단 웹 서비스

"코로나 우울 극복과 자살 예방" 을 주제로 진행한 제4회 정부혁신제안 끝장개발대회에서 개발한 프로젝트입니다.

<br />

## Link

* [demo](101.101.217.17)
* [Notion](https://www.notion.so/00data/c8524cefac7f4d13ab4d40d43dcde7e5?v=7599432407d54dd48f1f75754dd74146)
* [Frontend Docker Hub](https://hub.docker.com/repository/docker/osy0056/mind-detect)

<br />

## View

<img src ="https://user-images.githubusercontent.com/46865281/104859440-bf8b9980-5968-11eb-84c9-09c3c2ffe5bf.png" width="650px" height="420px">

<img src ="https://user-images.githubusercontent.com/46865281/104859536-72f48e00-5969-11eb-87a3-8a9dc6045dc0.png" width="500px" height="420px">

## Usage


```bash
# install
cd client && yarn

# development
yarn start

# build
yarn build

# deployment
docker pull osy0056/mind-detector-front:{tag}
```

<br />

## Feature

1️⃣ 사용자의 이야기를 토대로 우울감 자가 진단

2️⃣ AI 감성 분석 기술과 공공데이터로 사용자의 우울감 검진

3️⃣ 맞춤 상담센터 정보제공

4️⃣ 사용자 데이터 축적을 통한 대국민 우울 지수 현황 파악
<br />

## Stack

- typescript
- React, Redux, Redux-Saga, react-textarea-autosize
- styled-components
- eslint, prettier
- Nginx
- Docker
- github action

<img src ="https://user-images.githubusercontent.com/46865281/104859574-c36beb80-5969-11eb-8128-27feffc89f62.png" width="650px" height="380px">
