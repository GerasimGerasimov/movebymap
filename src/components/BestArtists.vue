//блок "Лучшие из Лучших"
<template>
  <div class="bestArtists">
      <ArtistCard 
        v-for="(item, index) in images"
        :item="item"
        :index="index"
        :key="index"
        :url="item"
        :msg="`Artist Cards: ${item}`"/>             
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArtistCard from './ArtistCard.vue';

@Component
({
  components: {
    ArtistCard,
  },
})
export default class BestArtists extends Vue {
    @Prop() private images!: string[];

  mounted ():any {
    console.log(this.images);
  }
}
</script>

<style scoped>
.bestArtists {
    width: 100%;
    height: auto;
    border: 1px red solid;
    /* правила для контента */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>