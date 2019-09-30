<template>
  <div id="app">
    <Carousel :images="slides"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Carousel from './components/Carousel.vue';

@Component({
  components: {
    HelloWorld,
    Carousel,
  },
})
export default class App extends Vue {
    private slides: string[] = [
      'https://shop.anseladams.com/v/vspfiles/photos/1701130110-2T.jpg',
      'https://st.depositphotos.com/1011976/2987/i/450/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg',
      'https://imgb.itour.ru/public/2019/07/07/11141/11141-LjBlXjcLj0DIfYJPOMT-800x540.jpg',
      './banners/014.jpg',
      './banners/015.jpg',
      './banners/016.jpg',
      'https://i.kapital.kz/c/4589e21ae2a2a42c3b63c9659f504c34/n/1280/960/9/7/c/4/a/8df1577fb8fa40d2c848f226c67.jpg'];
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
