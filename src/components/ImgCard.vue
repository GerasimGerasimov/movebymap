// блок с одним изображением и информацие

<template>
  <div class="card">
      <!--{{msg}}-->
    <img  class="card__image"
          :class="{loaded:(isLoaded)}"
          :src="url"
          :title="url"
          v-on:load="onLoad">
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImgCard extends Vue {
    @Prop() private msg!: string;
    @Prop() private url!: string;//= 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    private isLoaded: boolean = false;
    private onLoad():void {
      //console.log(`image loaded: ${this.url}`);
      this.isLoaded = true;
    }
}
</script>

<style scoped>
.card{
    margin: 10px;
    width: 100px;
    height: 100px;
    /*border: 2px green solid;*/
    /*box-shadow: 0px 4px 5px 2px gray;*/
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    overflow: hidden;
    position: relative;
    background: url('/icons/Ripple-1s-64px.gif') no-repeat center center;
}

.card__image {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    width: 100%; /* Ширина изображений */
    height: 100%; /* Высота изображении */
    object-fit: cover; /* Вписываем фотографию в область */
    transition: opacity 1500ms;
}

.loaded {
  opacity: 1;
}

</style>