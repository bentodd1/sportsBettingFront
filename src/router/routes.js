
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('components/Login.vue') },
      {path: '/LeagueList', name: 'LeagueList',
      component: () => import(/* webpackChunkName: "about" */ '../components/LeagueList.vue'),props: true},
      {
        path: '/League',
        name: 'League',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/League.vue'),
        props: true,
      },
      {
        path: '/GameDetails',
        name: 'GameDetails',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/GameDetails.vue'),
        props: true,
      },
      {
        path: '/account',
        name: 'account',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/AccountOverview.vue'),
        props: true,
      },



    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
