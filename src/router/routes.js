export default [
  {
    path: '/',
    name: 'index',
    component: resolve => {
      require(['@/components/indexpage'], resolve)
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/test',
    name: 'test',
    component: resolve => {
      require(['@/components/test'], resolve)
    }
  }
]
