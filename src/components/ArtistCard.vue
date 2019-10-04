// блок с одним изображением и информацие

<template>
  <div class="artistcard">
      {{msg}}
    <img class="artistcard__image" :src="url" :title="url">
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ArtistCard extends Vue {
    @Prop() private msg!: string;
    @Prop() private url!: string;
}
</script>

<style scoped>
.artistcard{
    border-radius: 50%;
    margin: 10px;
    width: 100px;
    height: 100px;
    border: 2px green solid;
    overflow: hidden;
    position: relative;
}

.artistcard__image {
    position: absolute;
    left: 0px;
    top: 0px;
}

</style>