<template>
  <div>
    <div id="order">
      <h1>Your order</h1>
      <b-button @click="deleteAllBook" variant="outline-danger"
      >remove all
        <b-icon icon="trash"/>
      </b-button>
    </div>
    <table id="cart-table">
      <tr>
        <th>#</th>
        <th>item</th>
        <th>count</th>
        <th>total</th>
        <th>action</th>
      </tr>
      <tr :key="item.id" v-for="item in getItemsCart">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.countBook }}</td>
        <td>${{ item.price * item.countBook }}</td>
        <td>
          <b-button
                  @click="incrementBookCount(item.id)"
                  variant="outline-primary"
          >
            <b-icon icon="plus-circle"/>
          </b-button>
          <b-button
                  @click="decrementBookCount(item.id)"
                  variant="outline-warning"
          >
            <b-icon icon="patch-minus"/>
          </b-button>
          <b-button @click="deleteOneBook(item.id)" variant="outline-danger">
            <b-icon icon="trash"/>
          </b-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from "vuex";

  export default {
    computed: mapGetters(["getItemsCart"]),
    methods: {
      ...mapMutations(["deleteOneBook", "decrementBookCount", "deleteAllBook"]),
      ...mapActions(["incrementBookCount"])
    }
  };
</script>

<style>
  #cart-table {
    width: 100%;
    height: auto;
    text-align: center;
    display: grid;
    justify-items: center;
  }

  @media (max-width: 1200px) {
    #cart-table {
      width: 100%;
      overflow: scroll;
    }
  }

  #cart-table tr td,
  th {
    padding: 10vh;
  }

  #cart-table tr {
    border-bottom: 1px solid #ccc;
  }

  #order {
    width: 100%;
    display: flex;
    padding: 5px;
  }

  #order button {
    margin-left: auto;
  }

  #order h1 {
    margin-right: auto;
  }
</style>
