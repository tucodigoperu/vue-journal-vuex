export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[

        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "dayboo-no-entry" */ '@/modules/daybook/views/noentry-selected.vue'),
        },

        {
            path:':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "dayboo-entry" */ '@/modules/daybook/views/entry-view.vue'),
        }


        
    ]
}