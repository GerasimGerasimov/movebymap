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

import { State, Action, Getter, Mutation } from 'vuex-class';
import { mapGetters, mapMutations } from 'vuex'
import { ProfileState, User } from './models/profile/types';
const namespace: string = 'profile';


@Component({
  // для того чтобы вызвать мутацию через mapMutations
  // пришлось в @Component добавлять methods и в него
  //...mapMutations('profile',{setEmail:'profileLoaded'})
  // чтобы в итоге сделать вызов this.setEmail(payload);
  // из namespace = profile
  methods: {
      ...mapMutations('profile',{setEmail:'profileLoaded'})
  },
  components: {
    HelloWorld,
    Carousel,
    RandomSizeCellsGrid,
    BestArtists,
  },
})
export default class App extends Vue {
    @State('profile') profile: ProfileState;
    @Action('fetchData', { namespace }) fetchData: any;
    @Getter('fullName', { namespace }) fullName: string;
    @Getter('email', { namespace }) email: string;
    @Mutation('profileLoaded', { namespace }) profileLoaded: any;
    //private _profileLoaded:any = ...mapGetters('profile/profileLoaded')
    mounted(){
      //вызываю Action
      this.fetchData();
      //МЕНЯЮ СТЕЙТ
      //1) фоо=рмирую объект для записи
      const payload: User = {firstName:'', lastName:'', email:'dialix@yandex.ru'};
      //2) теперь с помощью мутации меняю его значени в сторе
      //  2.1) правильный способ вызвать мутацию
          this.profileLoaded(payload);
          console.log('store:>')
          console.log(this.$store);
      // 2.2) ещё один способ вызвать мутацию
      //      указываю namespace в данном случае profile
      //      и имя функции-мутации profileLoaded
      //      'namespace/mutation'
          this.$store.commit('profile/profileLoaded',payload);
      // 2.3) вызов мутации через mapMutations
          this.setEmail(payload);
      //this.$store.commit('profileLoaded', payload);
      // ЧИТАЮ СТЕЙТ
      // 1) через Getter
      let email = this.email;
      console.log('email:', email);
      email = this.$store.state.profile.user.email;
      console.log('email:', email);
    }
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
