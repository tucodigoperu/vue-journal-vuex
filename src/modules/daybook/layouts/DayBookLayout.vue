<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <RouterView/>
        </div>
    </div>
</template>

<script>

import {defineAsyncComponent} from 'vue'

export default {
    components:{

        Navbar: defineAsyncComponent(()=>import('../components/navar-comp.vue')),
        EntryList : defineAsyncComponent(()=>import('../components/entry-list.vue'))
    }
}
</script>