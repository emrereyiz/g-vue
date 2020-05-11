<template>
    <div>
        <div class="d-flex justify-content-center align-items-center" id="main">
            <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div class="inline-block align-middle">
                <h2 class="font-weight-normal lead" id="desc">Aradığını yoktu veya değiştirildi.</h2>
            </div>
            <div class="clearfix"></div>
        </div>
        <router-link
            to="/"
            tag="div"
        >
        <button type="button" class="btn btn-primary">Ana sayfaya dön.</button>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    .router-link-active{
        text-align: center;
    }

</style>