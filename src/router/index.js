import Vue from 'vue'
import Router from 'vue-router'

// 所有home下的子组件需要应用到路由的均放在下面,其他页面同理
const Home = () => import('@/views/home/Home')
const Test = () => import('@/views/home/childCops/Test')


/*
  company
*/
const Company = () => import('@/views/company/Company')





/*
  stock
*/
const Stock = () => import('@/views/stock/Stock')



/*
  search
*/
const Search = () => import('@/views/search/Search')




/*
  profile
*/
const Profile = () => import('@/views/profile/Profile')



/*
  comment
*/
const Comment = () => import('@/views/comment/Comment')



/*
  About
*/
const About = () => import('@/views/about/About')



/*
  News
*/
const News = () => import('@/views/news/News')



/*
  App
*/
const App = () => import('@/views/app/App')





/*
  Manage
*/
const Manage = () => import('@/views/manage/Manage')



Vue.use(Router)
const routes =  [
    // 默认路径
    {
      path: '',
      redirect: '/home'
    },
    // home
    {
      path: '/home',
      component: Home,
      // 这里只会在Home的router-view中进行渲染
      // children: [
      //   {
      //     path: '/test',
      //     component: Test
      //   }
      // ]
    },
    {
      path: '/company',
      component: Company
    },
    {
      path: '/stock',
      component: Stock
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/app',
      component: App
    },
    {
      path: '/comment',
      component: Comment
    },
    {
      path: '/manage',
      component: Manage
    }
  ]
export default new Router({
  mode: 'history',
  routes,
})
