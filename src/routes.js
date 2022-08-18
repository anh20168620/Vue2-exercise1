import Laptop from './components/Laptop.vue'
import Pc from './components/Pc.vue'
import Accessory from './components/Accessory.vue'
import Promotion from './components/Promotion.vue'
import DetailProduct from './components/DetailProduct.vue'

export default [
    { path: '/laptop', component: Laptop }, { path: '/pc', component: Pc }, { path: '/linh-kien', component: Accessory }, { path: '/khuyen-mai', component: Promotion }, { path: '/', redirect: '/laptop' }, { path: '/detail-product/:id', component: DetailProduct }
] 