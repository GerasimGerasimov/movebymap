// блок с одним изображением и информацие

<template>
  <div class="card">
      {{msg}}
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImgCard extends Vue {
    @Prop() private msg!: string;
}
</script>

<style scoped>
.card{
    margin: 10px;
    width: 100px;
    height: 100px;
    border: 2px green solid;
}

</style>