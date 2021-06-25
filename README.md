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

내가 보여주고 싶은 정보 외에도 불필요한 정보들을 서버에서 받아와 사용하게 되는 것. 
>> 비효율적임.
frontend가 database에 필요한 정보만 요청하게 해서 해결가능

- Under-fetching

인스타그램 앱을 시작할 때 feed, notification, userprofile에 대한 정보를 받아야 됨.
>> 하나의 기능을 위해 여러 요청을 더 받아와야 하는 것.
>> graphql에서 원하는 정보만 받음으로써 해결 가능

query를 사용. 원하는 정보를 요청해서 database에 요구할 수 있음.
object형태로 정보 통신을 함.

#### graphql-yoga를 설치하고 환경 setting하기

graphql-yoga 를 설치할 것임. 
create-react-app이랑 비슷한데, graphql 프로젝트를 진행하는데 도움이 되는 것임.

backend개발에 편함. 
movie API를 만들것임. NodeJS, JavaScript, Backend에 익숙해지면 좋음.

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


query: 내가 원하는 형식대로 정보를 받고자 할 때 사용
Resolver: query를 해결하기 위해 있는 기능
graphql에서 내가 원하는 형식의 query로 정보를 받는 것을 확인할 수 있음.
이 query를 보낼때 타입의 형식 역시 Schema로 지정할 수 있음. 맞는 타입이 아니면 error가 남.
graphql에서 resolver는 일종의 원하는 데이터 형식을 지정하는 역할을 한다. 이때, resolver 데이터의 타입들을 schema로 지정할 수 있다. db.js는 일종의 데이터베이스의 역할을 하는데, 여러 사람들에 대한 정보를 담고 있다.
이 정보들을 resolver에서 불러와 people의형태, person의 형태로 제공한다.
db.js에 사람들에 대한 정보들을 저장한다. 이 때 사람들을 구별해주기 위해 id를 부여한다.  이 db는 resolver.js에서 import해서 people의 형태로 사용된다. 이때 이 people의 type은 schema에서 정의 되는데, people: [Person]! 으로 리스트 형태로 받게 한다. Person의 타입에서는 id가 추가되어야 한다.
 
#### Mutation을 정의하고 사용하기

![image](https://user-images.githubusercontent.com/44837403/114276664-9f98dd00-9a62-11eb-987b-2ee5d2dd738b.png)

Mutation: 데이터베이스의 상태를 변하게 하거나 할 때 사용하는 것임.
Movie정보들을 db에 저장하고 getMovies, addMovies, getByid에 대한 query들을 resolver에 정의해둔다. 
이렇게 하면 저장된 영화의 정보들 중에서 내가 원하는 형태의 정보를 얻어낼 수 있다. 또한 원하는 영화의 정보 역시 id를 통해 확인할
수 있다. addMovie를 통해서 추가하고 싶은 영화 정보를 db에 추가해줄 수도 있다. (array명령어 push 사용)

component에 있는 prop들을 보내줄때 제대로 보냈는지 확인할 것이다.
PropTypes 에 컴포넌트가 가지는 Props들을 check할 수 있다. 원하는 속성들을 잘 보내주었는지 확인시켜주는 기능이다.

#### Delete Mutation 구성하기

return true, false를 해줌으로써 Mutation의 response도 확인할 수 있음.
어떤 backend라도 graphql을 적용할 수 있음.
다른 api들과 이야기할 수 있음. 사용자는 playground 콘솔에서 상호작용함.
서버에서 내가 지우고 싶은 영화를 지울 수 있도록 설정했음. resolve.js의 mutation에 deleteMovie 기능을 작성하고 그에 맞게 schema 설정 및 db에서 boolean값을 리턴하는 함수를 만들고 export 해주었음. 이는 import해서 사용됨. 이렇게 response를 얻게 하면 나중에 자동화 기능을 추가해줄 수 있음. 

***

## 느낀점

서버에서 데이터를 어떤식으로 받아오는지에 대해서 좀 더 자세히 알 수 있었습니다. 아마 다양한 framework나 tool들이 있을 것 같고 만약 사용하게 될 일이 온다면
이번에 공부한 내용들이 사용될 수 있지 않을까 생각하고 있습니다. 





