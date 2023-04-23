<template>
    <div class="w-full bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]">
        <div class="max-2-7xl mx-auto flex justify-between items-center">
            <router-link to="/">
              <img src="https://via.placeholder.com/120x50" alt="logo">
            </router-link>
            <div class="basis-3/4">
                <ul class="flex justify-around">
                  <li class="relative" v-for="(e,index) in NavList[0]" :key="e">
                      <router-link :to="NavList[1][index]" >{{ e  }}</router-link>
                  </li>


                    <!-- <li><router-link to="/profile">프로필</router-link></li>
                    <li><router-link to="/skill">스킬</router-link></li>
                    <li><router-link to="/portfolio">포트폴리오</router-link></li> -->
                </ul>
            </div>
            <div class="basis-1/12">
                <ul class="flex justify-between">
                    <li class="basis-2/4 text-center cursor-pointer">
                        <font-awesome-icon :icon="isDark ? 'sun' :'moon'" class="text-2/1" @click="$emit('dark')" />
                    </li>
                    <li class="basis-2/4 text-center cursor-pointer">
                        <font-awesome-icon icon="globe" class="text-2/1" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
  
</template>

<script>
//  앱 뷰에서 임포트


  export default {
    name:"NavPage",
    props :{
      isDark:Boolean
    },
    components : {
          
    },

    
    data() {
      return {
        
        NavList:[["프로필","스킬","포트폴리오"],["/profile","/skill","/portfolio"]]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>