// Сетка блоков с изображениями. Блоки имеют рэндомные размеры.
// Сетка старается оптимально заполнится блоками.

<template>
  <div class="content">
      {{msg}}
      <ImgCard msg="Image Card 2"/>
      <ImgCard msg="Image Card 2"/>
      <ImgCard msg="Image Card 3"/>
      <ImgCard msg="Image Card 4"/> 
      <ImgCard msg="Image Card 5"/>
      <ImgCard msg="Image Card 6"/>
      <ImgCard msg="Image Card 7"/>
      <ImgCard msg="Image Card 8"/>                
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ImgCard from './ImgCard.vue';

@Component
({
  components: {
    ImgCard
  },
})
export default class RandomSizeCellsGrid extends Vue {
    @Prop() private msg!: string;
}
</script>

<style scoped>
.content {
    width: 100%;
    height: auto;
    border: 1px red solid;
    /* правила для контента */
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-around;*/
}

</style>