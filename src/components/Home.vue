<template>
  <div>
    <book :books="book" :key="book.id" v-for="book in getData"/>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Book from "./Book";

  export default {
    components: {Book},
    computed: mapGetters(["getData"])
  };
</script>
