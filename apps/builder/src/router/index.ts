import ActionView from '@/views/ActionView.vue'
import AppView from '@/views/AppView.vue'
import DataSourceView from '@/views/DataSourceView.vue'
import LayoutView from '@/views/LayoutView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/app",
      name:'app',
      component:AppView,
      children:[{
        path:'dataSource',
        component:DataSourceView
      },
      {
        path:'layout',
        component:LayoutView
      },
      {
        path:'actions',
        component:ActionView
      }
    ]
    }
  ],
})

export default router
