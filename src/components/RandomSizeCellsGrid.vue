// Сетка блоков с изображениями. Блоки имеют рэндомные размеры.
// Сетка старается оптимально заполнится блоками.

<template>
  <div class="content">
      {{msg}}
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RandomSizeCellsGrid extends Vue {
    @Prop() private msg!: string;
}
</script>

<style scoped>
.content {
    width: 100%;
    border: 1px red solid;
}

</style>