<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Vue Projesi</a>
    <button v-on:click="changeClass" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div v-bind:class="mobileClass+'collapse navbar-collapse'" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
            <router-link v-bind:to="item.url" v-for="item in routerType.list" v-bind:tag="routerType.tag">
                <a class="nav-link" href="javascript:;">
                    {{item.text}}
                </a>
            </router-link>
        </ul>
    </div>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            mobileClass: '',
            routerType: {
                tag: 'li',
                list: [
                    {
                        url: '/',
                        text: 'Ana Sayfa',
                    },
                    {
                        url: '/about',
                        text: 'Hakkımda',
                    },
                    {
                        url: '/user-add',
                        text: 'Üye Ekle',
                    },
                    {
                        url: '/Contact',
                        text: 'İletişim',
                    },
                ],
            },
        }
    },
    methods: {
        changeClass(){
            this.mobileClass = this.mobileClass == '' ? 'show' : '';
        },
    }
}
</script>