<template>
    <div>
        Test
    </div>
</template>
<script>
import axios from "axios";

export default {
    created(){
        const marvel = axios.create({
        baseURL: '',
        headers: {'X-Custom-Header': 'reyiz'}
        });
        marvel.get("https://gateway.marvel.com:443/v1/public/characters?apikey=3c5eff0b582691e375bd82342aab4a28")
        .then(response =>{
            console.log(response)
        });
    }, 
}
</script>
<style lang="scss">

</style>