<template>
    <div>
        <li v-for="user in this.$store.state.userData" class="list-group-item justify-content-between align-items-center">
            <strong>E-posta</strong>
            <span class="text-primary">{{user.data.userName}}</span>
            <hr>
            <strong>Parola</strong>
            <span class="text-success">{{user.data.userPass}}</span>
        </li>
    </div>
</template>
<script>
export default {
    mounted(){
    }
}
</script>