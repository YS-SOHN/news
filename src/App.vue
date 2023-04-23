<template class="w-full">
  <div class="w-3/4">
    <div class="flex justify-center border">
      <div v-for="(e,index) in details" :key="index" alt="details">
          <img :src="e.img" alt="image" />
          <p>{{ e.pic }}</p>
          <p>{{ e.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
    details:[
      {
      pic:'cl1',
      title:'여권',
      img: require("./assets/cl1.jpg")
      },
      {
      pic:'cl2',
      title:'기권',
      img: require ("./assets/cl2.jpg")
      },
      {
        pic:'cl3',
        title:'다권',
        img: require ("./assets/cl3.jpg")
      }
        ]
    }
  },
  components: {
    
  },
  
  
}
</script>

<style>

</style>
