## GraphQL

웹에 관해서, 그 중에서도 GraphQL에 대해서 공부하고 강의들을 수강한뒤, 최종 실습 파트 부분에서 만든 코드입니다.

https://kimsmartblog.tistory.com/

블로그 Web 파트 - GraphQL에 기능별로 정리되어있습니다.


## 강의 제목 및 출처
https://nomadcoders.co/graphql-for-beginners

Web front, backend Full stack Nomad 선생님


## 목차
![image](https://user-images.githubusercontent.com/44837403/114276188-8727c300-9a60-11eb-923a-91b41b87a284.png)


## 진행 기간
2020-08-03 ~ 2020-08-05


## 프로그램 기능

#### GraphQL을 통해 해결할 수 있는 문제

- Overfetching

내가 보여주고 싶은 정보 외에도 불필요한 정보들을 서버에서 받아와 사용하게 되는 것입니다.
>> 비효율적
frontend가 database에 필요한 정보만 요청하게 해서 해결가능합니다.

- Under-fetching

인스타그램 앱을 시작할 때 feed, notification, userprofile에 대한 정보를 받아야 됩니다.
>> 하나의 기능을 위해 여러 요청을 더 받아와야 하는 것입니다.
>> graphql에서 원하는 정보만 받음으로써 해결 가능

#### graphql-yoga를 설치하고 환경 setting하기

graphql-yoga 를 설치
(create-react-app이랑 비슷한데, graphql 프로젝트를 진행하는데 도움이 됩니다.)

backend개발에 도움
movie API를 만들것입니다. NodeJS, JavaScript, Backend에 사용 됩니다.

mkdir movieql
cd movieql
yarn init
name (movieql): enter
version (1.0.0): enter
description: Movie API with Graphql
enter
https://github.com/kimhyeonmyeong/movieql
git hub에서 repository 추가, url 입력

#### Query, Resolver를 정의하고 Query에 따라 Schema 구성하기

![image](https://user-images.githubusercontent.com/44837403/114276682-b3444380-9a62-11eb-978c-49c7deb92310.png)

graphql에서 내가 원하는 형식의 query로 정보를 받는 것을 확인하는 기능

데이터 query 타입 schema 지정 기능 

Reslover를 통해서 정해준 데이터 형식에 맞추어서 통신에 사용하는 기능

#### Mutation을 정의하고 사용하기

![image](https://user-images.githubusercontent.com/44837403/114276664-9f98dd00-9a62-11eb-987b-2ee5d2dd738b.png)

저장된 영화 정보를 Mutation을 통해서 update하는 기능

추가하고 싶은 영화 정보 Mutation으로 추가하는 기능

#### Delete Mutation 구성하기

저장된 영화 정보에서 Mutation을 활용해 Delete하는 기능

***

## 느낀점

서버에서 데이터를 어떤식으로 받아오는지에 대해서 좀 더 자세히 알 수 있었습니다. 아마 다양한 framework나 tool들이 있을 것 같고 만약 사용하게 될 일이 온다면
이번에 공부한 내용들이 사용될 수 있지 않을까 생각하고 있습니다. 





