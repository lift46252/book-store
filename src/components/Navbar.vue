<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link :to="{ name: 'home' }" id="brand">
        <b-icon icon="book"/>
        BookStore
      </router-link>
      <router-link :to="{ name: 'add-book' }">
        Add a Book
      </router-link>
      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link :to="{ name: 'cart' }">
            <b-icon icon="cart" id="cart"/>
            {{ getItemsCounter }}items(${{ getPrice }})
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Navbar",
    computed: mapGetters(["getItemsCounter", "getPrice"])
  };
</script>

<style>
  a {
    color: white!important;
    font-size: 20px;
  }

  a:hover {
    color: white;
  }

  #cart {
    font-size: 30px;
  }

  #cart:hover {
    font-size: 32px;
  }

  #brand {
    font-size: 30px;
    width: auto;
    margin: 0 10px 0 0;
  }
</style>
