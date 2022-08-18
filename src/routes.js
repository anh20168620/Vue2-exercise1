import laptop from './pages/laptop.vue'
import pc from './pages/pc.vue'
import accessory from './pages/accessory.vue'
import promotion from './pages/promotion.vue'
import detailproduct from './pages/detail-product.vue'

export default [
    { path: '/laptop', component: laptop },
    { path: '/pc', component: pc },
    { path: '/linh-kien', component: accessory },
    { path: '/khuyen-mai', component: promotion },
    { path: '/', redirect: '/laptop' },
    { path: '/detail-product/:id', component: detailproduct }
] 