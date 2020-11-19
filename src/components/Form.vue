<template>
  <b-form action="#" @submit.prevent="addBook()">
      <label for="title">
        <p>Title of Book :</p>
        <b-form-input  id="title" type="text" v-model="title"></b-form-input>
      </label>
      <label for="author">
        <p>Author of Book :</p>
        <b-form-input  id="author" type="text" v-model="author"></b-form-input>
      </label>
        <label for="price">
        <p>Price of Book :</p>
        <b-form-input  id="price" type="number" v-model="price"></b-form-input>
      </label>
        <label for="url-image">
        <p>Image of Book (URL):</p>
        <b-form-input  id="url-image" type="url" v-model="image"></b-form-input>
      </label>
      <b-button variant="primary" type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import {mapActions,mapMutations, mapState} from "vuex"
export default {
    name:'add-book',
    methods:{
      ...mapActions(['addBook']),  
      ...mapMutations(['getTitle','getAuthor','getAddPrice','getImage']) ,
    },
    computed:{
       ...mapState(['addTitle','addAuthor','addPrice','addImage']),
       title:{
           get(){
               return this.addTitle
           },
           set(value){
               this.getTitle(value)
           }
       },
       author:{
           get(){
               return this.addAuthor
           },
           set(value){
               this.getAuthor(value)
           }
       },
       image:{
           get(){
               return this.addImage
           },
           set(value){
               this.getImage(value)
           }
       },    
       price:{
           get(){
               return this.addPrice
           },
           set(value){
               this.getAddPrice(value)
           }
       }, 
    }
}
</script>

<style>
form{
    display: grid;
    justify-items: center;
    width: 200px;
    margin: 0 auto;
}
form button{

}
</style>