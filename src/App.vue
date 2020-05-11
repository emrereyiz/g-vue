<template>
  <div id="app">
    <app-header></app-header>

      <section class="container">
          <router-view></router-view>
      </section>
      
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
export default {
  components:{
    appHeader: Header,
    appFooter: Footer,
  },
}
</script>

<style lang="scss" scoped>
  section{
    display:flex;
    align-items:center;
    justify-content: center;
    min-height: 400px;
  }
</style>