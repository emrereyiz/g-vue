<template>
  <div id="app">
    <app-header></app-header>

      <section class="container">
        <transition 
          leave-class=" animated shake "
          leave-active-class=" animated shake "
          leave-to-class=" animated shake "
          enter-class=" animated shake"
          enter-active-class=" animated shake"
          enter-to-class=" animated shake"
          mode="out-in"
        >
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
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
    flex-wrap:wrap;
  }
  .container > div{
      width: 100%;
      float:left;
  }
</style>