## GraphQL

Web Backend GraphQL에 대해서 공부하고 실습코드들을 정리했습니다.

### 강의 제목 및 출처
https://nomadcoders.co/graphql-for-beginners

Web front, backend Full stack Nomad 

### 목차

![image](https://user-images.githubusercontent.com/44837403/153229768-8cd34888-8a93-43fa-bcb3-18eeeb7ddfbf.png)

## 진행 기간
2020-08-03 ~ 2020-08-05


### 프로그램 기능

#### GraphQL을 통해 해결할 수 있는 문제

- Overfetching

내가 보여주고 싶은 정보 외에도 불필요한 정보들을 서버에서 받아와 사용하게 되는 것입니다.
>> 비효율적
frontend가 database에 필요한 정보만 요청하게 해서 해결가능합니다.

- Under-fetching

인스타그램 앱을 시작할 때 feed, notification, userprofile에 대한 정보를 받아야 됩니다.
>> 하나의 기능을 위해 여러 요청을 더 받아와야 하는 것입니다.
>> graphql에서 원하는 정보만 받음으로써 해결 가능

### Specification

- graphql-yoga 

- Query, Resolver를 정의하고 Query에 맞춘 Schema 구성

![image](https://user-images.githubusercontent.com/44837403/147017356-a5969211-1646-48e7-9dd3-5a2caae1a234.png)

- graphql에서 내가 원하는 형식의 query로 정보를 받는 것을 확인하는 기능

- Reslover를 통해서 정해준 데이터 형식에 맞추어서 통신에 사용

- Mutation을 정의하고 사용

![image](https://user-images.githubusercontent.com/44837403/114276664-9f98dd00-9a62-11eb-987b-2ee5d2dd738b.png)

- 저장된 영화 정보를 Mutation을 통해서 update하는 기능

- 추가하고 싶은 영화 정보 Mutation으로 추가하는 기능

- Delete Mutation 구성






