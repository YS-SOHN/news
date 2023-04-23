import { createWebHistory,createRouter } from "vue-router";

// import 이것은 문법임!

const routes =[
  {
    path:"/",
    name : "MainHome",
    component : () =>import('@/pages/Home')
  },
  {
    path:"/profile",
    name : "ProfilePage",
    component : () =>import('@/pages/Profile')
  },
  {
    path:"/skill",
    name : "SkillPage",
    component : () =>import('@/pages/Skill')
  },
  {
    path:"/portfolio",
    name : "PortFolio",
    component : () =>import('@/pages/Portfolio')
  },
  {
    path:"/:pathMatch(.*)*",
    redirect:"/404"
  },
  {
    path:"/404",
    component : ()=>import('@/pages/NotPage') 
  },
]

const router = createRouter ({
  history:createWebHistory(),
  routes
})

export default router;