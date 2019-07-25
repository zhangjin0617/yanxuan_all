
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Find from '../pages/Find/Find.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Thing from '../pages/Find/Thing/Thing.vue'
import Zhenxuanjia from '../pages/Find/Zhenxuanjia/Zhenxuanjia.vue'
export default[
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/find',
    component:Find,
    meta:{
      isShowFooter:true
    },
    redirect:'/find/thing',
    children:[
    {
    path:'/find/thing',
    component:Thing,
    meta:{
      isShowFooter:true
    }
    },
    {
      path:'/find/zhenxuanjia',
      component:Zhenxuanjia,
      meta:{
        isShowFooter:true
      }
      }
    ]
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/home'
  },
]
