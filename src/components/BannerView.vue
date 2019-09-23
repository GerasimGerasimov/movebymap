<template>
  <div class="banners">
    <div class="slider">
        <img :class="classPrev" :src="srcPrev" alt=""
             :style="{ animationPlayState: playCtrl}">
        <img :class="classNext" :src="srcNext" alt=""
             :style="{ animationPlayState: playCtrl}" 
             v-on:animationiteration = "AnimationIteration">  
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BannerView extends Vue {
  @Prop() private msg!: string;
  private slides: string[] = [
                      './banners/011.jpg',
                      './banners/012.jpg',
                      './banners/013.jpg',
                      './banners/014.jpg',
                      './banners/015.jpg',
                      './banners/016.jpg'];

  private classPrev: string = 'prev';
  private classNext: string = 'next';
  private srcPrev: string = './banners/011.jpg';
  private srcNext: string = './banners/012.jpg';
  private playCtrl: string = 'running'; // 'paused';

  private AnimationIteration() {
    const nextSlide: string = this.getNextSlide();
    this.playCtrl = 'paused';
    if (this.classNext === 'next') {
      this.classNext = 'prev';
      this.classPrev = 'next';
      this.srcPrev = nextSlide;
    } else {
      this.classNext = 'next';
      this.classPrev = 'prev';
      this.srcNext = nextSlide;
    }
    setTimeout(() => {
      this.playCtrl = 'running';
    }, 2000);
  }

  private getNextSlide(): string {
    this.slides = this.slides.concat(this.slides.splice(0, this.slides.length - 1));
    return this.slides[0] || '';
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

.slider{
    color: green;
    border: 1px dashed blue;
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
}

@keyframes prev_animate {
    0%   {left: 0%;}
    100% {left: -100%;}
  }
  
.prev {
    position: absolute;
    left: 0%;
    width: 100%;
    animation: prev_animate 3s ease-in-out infinite;
}

@keyframes next_animate {
    0%   {left: 100%;}
    100% {left: 0%;}    
}

.next {
    position: absolute;
    left: 100%;
    width: 100%;
    animation: next_animate  3s ease-in-out infinite;
}
</style>
