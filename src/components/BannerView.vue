<template>
  <div class="banners">
    <transition-group name="slide" >
    <div class="slider" v-for="uri in images"
          :key="uri"
          :style="{ backgroundImage: `url(${uri})` }">
    </div>
    </transition-group>  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/*
      <div v-for="uri in images" :key="uri">
          <img :src="uri" alt="">
      </div>
*/
@Component
export default class BannerView extends Vue {
  @Prop() private msg!: string;
  private images: Array<string> = [ './banners/011.jpg',
                                    './banners/012.jpg'];
  private uriIndex: number = 0;
  private uri: string = "";

  mounted(){
    console.log("BannerView mounted");
    this.update();
  }

  created(){
      console.log("BannerView created");
  }
  
  private update(): void {
    //console.log("update");
    this.images = this.images.concat(this.images.splice(0, this.images.length - 1));
    //console.log(this.images);
    //if (++this.uriIndex >= this.images.length) this.uriIndex = 0;
    //this.uri = this.images[this.uriIndex]; 
    setTimeout(this.update, 2000);
  }
}
</script>

<style scoped>
.banners {
    border: 1px dashed royalblue;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.banners-image {
    /*width: 100%;*/
    height: 100%;
}

/*
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}*/

.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  /*transform: translate(-100%, 0);*/
}

.slide-enter-to {
  transform: translate(-100%, 0);
}

.slider{
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
}

/*
.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}
*/
</style>
