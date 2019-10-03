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

enum SlideShowControl {
    run  = "running",
    stop = "paused",
}

@Component
export default class Carousel extends Vue {
  @Prop() private images!: string[];
  private slides: string[] = this.images;

  private classPrev: string = 'prev';
  private classNext: string = 'next';
  private srcPrev: string = '';
  private srcNext: string = '';
  private playCtrl: string = SlideShowControl.run; // 'running'; // 'paused';

  constructor (){
    super();  
  }

  mounted ():any {
    this.srcPrev = this.getNextSlide();
    this.srcNext = this.getNextSlide();
  }

  private AnimationIteration() {
    const nextSlide: string = this.getNextSlide();
    this.playCtrl = SlideShowControl.stop;
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
      this.playCtrl = SlideShowControl.run;
    }, 1000);
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
    /*позиционирование по центру*/
    /*
    display: flex;
    justify-content: center;
    align-items: center;    */
}

@keyframes prev_animate {
    0%   {left: 0%;}
    100% {left: -100%;}
  }

.prev, .next {
  position: absolute;
  width: 100%;  
  height: auto;
}
.prev {
    left: 0%;
    animation: prev_animate 3s ease-in-out infinite;
}

@keyframes next_animate {
    0%   {left: 100%;}
    100% {left: 0%;}    
}

.next {
    left: 100%;
    animation: next_animate  3s ease-in-out infinite;
}
</style>
