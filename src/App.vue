<template>
  <div id="app">
    <app-header></app-header>

      <section class="container">
        <transition  name="customSlide">
          <router-view></router-view>
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




.customSlide-leave-to{
  animation-name: animateLeave;
  animation-duration: 1s;
}

.customSlide-enter-active {
  animation-name: animateEnter;
  animation-duration: 1s;
  opacity: 0;
}

@keyframes animateLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes animateEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.container > div{
    width: 100%;
    float:left;
}
</style>