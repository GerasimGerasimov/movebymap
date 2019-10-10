<template>
  <div id="app">
    <Carousel :images="slides"/>
    <RandomSizeCellsGrid :images="slides"/>
    <BestArtists :images="bestArtists"/>
    <HelloWorld msg="Vue.js + TypeScript"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Carousel from './components/Carousel.vue';
import RandomSizeCellsGrid from './components/RandomSizeCellsGrid.vue';
import BestArtists from './components/BestArtists.vue';

import { State, Action, Getter } from 'vuex-class';


@Component({
  components: {
    HelloWorld,
    Carousel,
    RandomSizeCellsGrid,
    BestArtists,
  },
})
export default class App extends Vue {
    private slides: string[] = [
      'https://shop.anseladams.com/v/vspfiles/photos/1701130110-2T.jpg',
      'https://st.depositphotos.com/1011976/2987/i/450/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg',
      './banners/011.jpg',
      './banners/012.jpg',
      './banners/013.jpg',
      './banners/014.jpg',
      './banners/015.jpg',
      './banners/016.jpg',
      'https://i.kapital.kz/c/4589e21ae2a2a42c3b63c9659f504c34/n/1280/960/9/7/c/4/a/8df1577fb8fa40d2c848f226c67.jpg'];

    private bestArtists: string[] = [
      'https://shop.anseladams.com/v/vspfiles/photos/1701130110-2T.jpg',
      'https://st.depositphotos.com/1011976/2987/i/450/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg',
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
