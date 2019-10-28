// Сетка блоков с изображениями. Блоки имеют рэндомные размеры.
// Сетка старается оптимально заполнится блоками.

<template>
  <div class="content">
      <ImgCard 
        v-for="(item, index) in images"
        :item="item"
        :index="index"
        :key="index"
        :url="item"
        :msg="`Image Card: ${item}`"/>             
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
    @Prop() private images!: string[];

  mounted ():any {
    //console.log(this.images);
  }
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
    justify-content: space-around;
}

</style>