<template>
  <b-form action="#" @submit.prevent="addBook()">
      <label>
        <p>Title of Book :</p>
        <b-form-input type="text" v-model="title"/>
      </label>
      <label>
        <p>Author of Book :</p>
        <b-form-input type="text" v-model="author"/>
      </label>
        <label>
        <p>Price of Book :</p>
        <b-form-input type="number" v-model="price"/>
      </label>
        <label>
        <p>Image of Book (URL):</p>
        <b-form-input type="url" v-model="image"/>
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
      ...mapMutations({
          setTitle:'setTitle',
          setAuthor:'setAuthor',
          setAddPrice:'setAddPrice',
          setImage:'setImage'
          }) ,
    },
    computed:{
       ...mapState(['addTitle','addAuthor','addPrice','addImage']),
       title:{
           get(){
               return this.addTitle
           },
           set(value){
               this.setTitle(value)
           }
       },
       author:{
           get(){
               return this.addAuthor
           },
           set(value){
               this.setAuthor(value)
           }
       },
       image:{
           get(){
               return this.addImage
           },
           set(value){
               this.setImage(value)
           }
       },    
       price:{
           get(){
               return this.addPrice
           },
           set(value){
               this.setAddPrice(value)
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
</style>