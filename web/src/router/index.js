import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import about_company from '@/components/about_company'
import about_media from '@/components/about_media'
import cooperation from '@/components/cooperation'
import recruitment from '@/components/recruitment'
import experience from '@/components/experience'
import media_content from '@/components/media_content'


Vue.use(Router);

export default new Router({
  routes: [
    { path:'/',name:'home',component:index},
    { path: '/index',name:'index', component: index},
    {
        path: '/about',
        name:'about',
        component: about,
        children:[
            {
                path:'',
                name:'about_home',
                component:about_company,
            },
            {
                path:'company',
                name:'company',
                component:about_company,
            },
            {
                path:'media',
                name:'media',
                component:about_media,
            },
            {
                path:'cooperation',
                name:'cooperation',
                component:cooperation,
                redirect: '/cooperation'
            },
            {
                path:'mediaContent',
                name:'mediaContent',
                component:media_content
            }
        ]
    },
    { path: '/experience', component: experience },
    { path: '/recruitment', component: recruitment },
    {path: '/cooperation', name:'cooperation',component: cooperation},
  ]
})
