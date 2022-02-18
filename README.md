# hospital-room-management
[DEMO] Tool server for managing hospital room &amp; Use serverless on aws lambda

## 병실 재고 관리 서버 (TOY)

### 🗂 프로젝트 소개

- 소개 : 여러 병원들의 병실을 관리하기 위한 API 서버이며,
"현재 버전(v1)"에서는 아래와 같은 조건을 따른다.
  - API 사용을 하기 위해서는 로그인하여 Access Token을 발급 받아야 한다.
  - 계정은 권한에 따라 생성/삭제/변경/조회 제한 할 수 있도록 분류한다.
  - n개의 병원이 존재할 수 있고, n개의 병실을 생성/변경/비활성화가 가능하다. (단, 병실에 환자가 1명이라도 있다면 비활성화 제외)
  - 현재 버전에서는 가격, 리프레시 토큰은 고려하지 않는다.
### 실행 방법

- $ npm install
- $ npm install -g serverless
- $ sls offline --env {.env} (로컬 서버 실행)
- $ sls invoke local -f {main} --path ./events/{file.js} (단일 이벤트 실행)

### 기술 스택

- typescript
- serverless framework
- lambda + aws apigateway
- lambda-api (lightweight web framework)
- aws aurora mysql (v5.7)

<br>
<br>
<hr>
<br>

### 서비스 ERD
![hospi_ERD](https://user-images.githubusercontent.com/68843162/154679697-609ea18b-a363-4ecc-9f5a-444c36953098.png)



### API

| path       | type |  설명           |
| ---------- | ---- | -------------- |
| /hospitals | GET  | 병원 리스트 반환 |

/hospitals 예시

```
code: 200,
message: ""
data:[{
  "id": 2856414,
  "name": "test ..",
  ...
}]
```

