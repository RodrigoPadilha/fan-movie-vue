<template>

    <div> 
        <menu-nav></menu-nav>
        
        <transition name="page">
            <router-view>
            </router-view>           
        </transition>
    </div>

</template>

<script>
    
    import Menu from './components/menu/Menu.vue';    

    export default {
        components: {    
            'menu-nav': Menu,
        }
    }

</script>

<style>
    .page-enter, .page-leave-active{
        opacity: 0;
    }

    .page-enter-active, .page-leave-active {
        transition: opacity .4s;
    }
    
</style>
