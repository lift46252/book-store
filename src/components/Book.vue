<template>
  <div class="book">
    <div class="cover">
      <img :alt="book.title" :src="book.cover"/>
    </div>
    <div class="text">
      <h4>{{ book.title }}</h4>
      <p>{{ book.author }}</p>
      <h5>${{ book.price }}</h5>
    </div>

    <b-button @click="addToCart(book)" class="btn" variant="outline-primary"
    >Add to Cart
    </b-button
    >
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "book",
    props: {
      book: {
        type: Object,
      }
    },
    methods: mapActions(["addToCart"])
  };
</script>

<style>
  .book {
    display: grid;
    margin: 0 auto;
    width: 50%;
    height: 30%;
  }

  .text {
    grid-column: 2/4;
    grid-row: 1;
    margin: 5px;
    display: grid;
    align-items: center;
    justify-items: flex-end;
  }

  .text h5 {
    font-weight: 900;
  }

  .cover {
    grid-column: 1;
    grid-row: 1;
    margin: 5px;
    display: grid;
  }

  .cover img {
    margin: 0;
    width: 150px;
    height: auto;
  }

  .btn {
    width: 150px;
    height: auto;
    display: grid;
    justify-items: center;
    margin: 5px;
  }
</style>
