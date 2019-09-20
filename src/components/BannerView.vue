<template>
  <div class="banners">
    <transition-group tag="div" class="img-slider" name="slide">
      <div v-for="number in uriIndex" :key="number">
          <img :src="images[number]" alt="">
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BannerView extends Vue {
  @Prop() private msg!: string;
  private images: Array<string> = [ './banners/011.jpg',
                                    './banners/012.jpg',
                                    './banners/013.jpg'];
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
    if (++this.uriIndex >= this.images.length) this.uriIndex = 0;
    this.uri = this.images[this.uriIndex]; 
    setTimeout(this.update, 1500);
  }
}
</script>

<style scoped>
.banners {
    border: 1px dashed royalblue;
    width: 100%;
    height: 200px;
}

.banners-image {
    /*width: 100%;*/
    height: 100%;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider{
  overflow: hidden;
  position: relative;
  height: 200px;
  width: 400px;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}

</style>
