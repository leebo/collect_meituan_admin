import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
import store from "./store";
import VueCookie from "vue-cookies";
Vue.use(VueCookie);
Vue.use(Router);

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/users/login",
      name: "usersLogin",
      meta: {
        layout: false,
        requiresAuth: false
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "./users/login.vue")
    },
    {
      path: "/users/add",
      name: "usersAdd",
      meta: {
        layout: false,
        requiresAuth: false
      },
      component: () => import(/* webpackChunkName: "add" */ "./users/add.vue")
    },
    {
      path: "/merchants",
      name: "merchantsIndex",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "merchantsIndex" */ "./merchants/MerchantsIndex.vue")
    },
    {
      path: "/merchantscity/:id",
      name: "merchantsCity",
      meta: {
        layout: true,
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "merchantsCity" */ "./merchants/MerchantsCity.vue")
    },
    {
      path: "/merchants/:id",
      name: "merchantsShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./merchants/MerchantsShow.vue")
    },
    {
      path: "/merchants/:id/edit",
      name: "merchantsEdit",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./merchants/MerchantsEdit.vue")
    },
    {
      path: "/waimai_merchants",
      name: "waimai_merchantsIndex",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./waimai_merchants/index.vue")
    },
    {
      path: "/waimai_merchants/:id",
      name: "waimai_merchantsShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./waimai_merchants/show.vue")
    },
    {
      path: "/order",
      name: "order",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./order/order.vue")
    },
    {
      path: "/order/:id",
      name: "showOrder",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./order/show.vue")
    },
    {
      path: "/waimai_merchants/:id/edit",
      name: "waimai_merchantsEdit",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./waimai_merchants/edit.vue")
    },
    {
      path: "/cities",
      name: "cityIndex",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./cities/CityIndex.vue")
    },
    {
      path: "/cities/:id",
      name: "citiesShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./cities/CityShow.vue")
    },
    {
      path: "/tuangous",
      name: "tuangouIndex",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./tuangous/index.vue")
    },
    {
      path: "/tuangous/:id",
      name: "tuangouShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./tuangous/show.vue")
    },
    {
      path: "/tuangous/:id/edit",
      name: "tuangouEdit",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./tuangous/edit.vue")
    },
    {
      path: "/daijinjuans",
      name: "daijinjuansIndex",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./daijinjuans/index.vue")
    },
    {
      path: "/daijinjuans/:id",
      name: "daijinjuansShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./daijinjuans/show.vue")
    },
    {
      path: "/daijinjuans/:id/edit",
      name: "daijinjuansEdit",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./daijinjuans/edit.vue")
    },
    {
      path: "/ip",
      name: "ipIndex",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "about" */ "./ip/index.vue")
    },
    {
      path: "/ip_addresses/:id",
      name: "ipShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "about" */ "./ip/show.vue")
    },
    {
      path: "/maidans",
      name: "maidansIndex",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./maidans/index.vue")
    },
    {
      path: "/maidans/:id",
      name: "maidansShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./maidans/show.vue")
    },
    {
      path: "/categories",
      name: "CategoriesIndex",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./categories/CategoriesIndex.vue")
    },
    {
      path: "/users",
      name: "usersIndex",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./users/index.vue")
    },

    {
      path: "/users/:id",
      name: "usersShow",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./users/show.vue")
    },
    {
      path: "/users/:id/edit",
      name: "usersEdit",
      meta: {
        layout: true,
        requiresAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./users/edit.vue")
    },
    {
      path: "/promotions",
      name: "promotionsIndex",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./promotions/promotionsList.vue"
        )
    },
    {
      path: "/onePromotion/:id/edit",
      name: "promotionsPromotion1",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./promotions/onePromotion.vue")
    },
    {
      path: "/twoPromotion/:id/edit",
      name: "promotionsPromotion2",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./promotions/twoPromotion.vue")
    },
    {
      path: "/threePromotion/:id/edit",
      name: "promotionsPromotion3",
      meta: {
        layout: true,
        requiresAuth: true,
        keepAlive: true
      },
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./promotions/threePromotion.vue"
        )
    }
  ]
});
router.beforeEach((to, from, next) => {
  // const token = store.state.token?store.state.token:window.sessionStorage.getItem("token")
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let cookie = VueCookie.get("user");
    if (cookie !== null) {
      Vue.prototype.$http.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookie}`;
      next();
    } else {
      if (store.state.user === null) {
        next("/users/login");
      } else {
        next();
      }
    }
  } else {
    next();
  }

  // }
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   console.log('fdsf')
  //   next('/users/login');
  // } else {

  // }
});
export default router;
