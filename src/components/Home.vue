<template>
  <div>
      <app-Books
      v-for="books in getData" :key="books.id" 
      :books="books"
      ></app-Books>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:mapGetters(['getData'])
}
</script>

<style>

</style>
