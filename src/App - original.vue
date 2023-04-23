<template>
  {{ Total }}
  {{ MsgChk }}
  
  
  <Nav joke="sorry it's my fault" :fack="1233" :data="['abcd',efgh]" :datalist="DataList[0]" @text="MsgChk='chk'" @calc="Total=$event" />
  <!-- datalist << 소문자는 작명   DataList는 아래 데이터 안의 자료!! -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import ListItem from './assets/Company.json'

/*
다른 컴퍼넌트 불러오는 방법
1. 임폴트 해준다. 누구를? 가지고 올 컴포넌트를..
import 사용할 이름(작명) from '컴포넌트 위치'
1번만 하면 일단 에러 > 임포트 한 컴포넌트를 사용하지 않으면 에러가 발생 !!

2. 스크립트 컴포넌트 공간에 임포트 작명한 이름을 등록해준다.
컴포넌트를 추가적으로 작성하기 위애허는 반드시 , 를 이용해서 등록한다
예 ) HelloWorld Nav (X) HelloWorld, Nav(o)
3. 등록이 완료된 컴포넌트는 html 공간에 태그형식으로 사용할 수 있으며, 단독 태그 이므로 닫는 태그를 사용하지 않는다.
예) 단독 태그는 일반태그 <p></p> 처럼 닫고 열고 태그 아닌 <img> 처럼 하나만 존재한다.
권장사항: 단독태그는 마지막에 / 작성한다 > 예) <img /> <input />

콜론을 안붙이면 문자열로 전달되며, 데이터로 전달하기 위해서는 : 바인드를 해준다
오브젝트 이름을 사용하면 전체 데이터가 특정 데이터를 적용하면 오브젝트, 키값으로 사용
자식이 부모의 데이터를 바꿀 수 없다. 원래 그렇게 만들어짐
props 의 데이터도 바꿀 수 없다.
따라서 부모가 가진 데이터를 자식이 바꾸고 싶다면, 자식 컴포넌트에서 부모에게 명령해야 한다. 이를 '커스텀 이벤트' 라 부른다. */



export default {
  name: 'App',
  data() {
    return {
      DataList:ListItem,
      Total:0,
      MsgChk : "테스트중"
    }
  },
  components: {
    HelloWorld,
    Nav,
    
  }
}
</script>

<style>

</style>
