const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/HomePage.vue'),
      },
    ]
  }
]

export default routes
