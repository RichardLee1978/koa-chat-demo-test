import Index from "./pages/index.vue"
import ServiceRoom from './pages/ServiceRoom.vue'
const routers = [
    {
        path: '/ServiceRoom',
        name: 'ServiceRoom',
        component: ServiceRoom
    },
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '*',
        name: 'home',
        component: Index
    }
    
];
export default routers;