<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="paste" v-on:paste="onPaste" v-on:click="onClick"
        :style="{ backgroundImage: `url(${src})` }">
        CTRL-C, CTRL-V сюда файлы
      </div>
    <div v-for="(uri) of imagesURI" :key="uri">
      <img class="image" :src="uri" alt="" v-on:click="onShowFullSize">
      {{uri}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private src: string = "";
  private imagesURI: Array<string> = [];

  private onShowFullSize():void {

  }

  private onPaste(e: any): void {
    console.log(e.clipboardData);
    for (const item of e.clipboardData.items) {
      console.log(item);
      if (item.type.indexOf("image") !== -1) {
        let blob = item.getAsFile();// представляем изображение в виде файла
        console.log(blob);
        // создаем временный урл объекта
        let URLObj = window.URL;
        let source = URLObj.createObjectURL(blob);
        this.imagesURI.push(source);  
        this.src = source;              
        // добавляем картинку в DOM
        //let pastedImage = new Image();
        //pastedImage.onload = function(){
//
        //}
        //pastedImage.src = source;
      }
    }
  }

  private onClick(e: any): void {
    console.log(e);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.paste {
  border: 1px solid red;
  width:200px;
  height: 200px;
  background-size: contain;
  background: no-repeat;
}

.image {
  height: 100px;
  width: 100px;
  border: 1px solid red;
}
</style>
