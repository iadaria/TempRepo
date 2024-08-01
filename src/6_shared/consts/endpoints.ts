export const endpoints = {
  account: {
    login: '/account/login',
  },
  shop: {
    restaurants: '/shop/restaurants',
    banner: '/shop/banner',
    menus: '/shop/menus',
    filters: '/shop/filters', //Different filters use their work resources.
    search: '/shop/search',
    restaurantsWithMenus: '/shop/restaurantsWithMenus',
    cart: '/shop/cart',
    createOrder: '/shop/order',
    cartAdd: '/shop/cart/add',
    cartRemove: '/shop/cart/remove',
    cartRemoveAll: '/shop/cart/remove/all',
    cartQuantity: '/shop/cart/quantity',
    bookmarks: '/shop/bookmarks',
    addBookmark: '/shop/bookmarks/add',
    removeBookmark: '/shop/bookmarks/remove',
    ordersHistory: '/shop/order',
  },
  order: {
    create: '/shop/order/create',
  },
  notify: {
    fetch: '/shop/noitifcations',
  },
};
