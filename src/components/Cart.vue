<template>
  <div>
      <div id="order">
      <h1>Your order</h1>
      <b-button variant="outline-danger" @click="deleteAllBook">remove all<b-icon icon="trash"></b-icon></b-button>          
      </div>
    <table id="cart-table">
        <tr>
            <th>#</th>
            <th>item</th>
            <th>count</th>
            <th>total</th>
            <th>action</th>
        </tr>
        <hr width="100%">
        <tr v-for="item in getItemsCart" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.countBook}}</td>
            <td>${{item.price*item.countBook}}</td>
            <td>
                <b-button variant="outline-primary" @click="incrementBookCount(item.id)">
                    <b-icon icon="plus-circle"></b-icon>
                </b-button>
                <b-button variant="outline-warning" @click="decrementBookCount(item.id)">
                    <b-icon icon="patch-minus"></b-icon>
                </b-button>
                <b-button variant="outline-danger" @click="deleteOneBook(item.id)">
                    <b-icon icon="trash"></b-icon>
                </b-button>
            </td>
            <hr width="100%">
        </tr>
       
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters,mapMutations} from "vuex"
export default {
    computed:mapGetters(['getItemsCart']),
    methods:{
     ...mapMutations(['deleteOneBook','decrementBookCount',"deleteAllBook"]),
     ...mapActions(['incrementBookCount'])
    }
}

</script>

<style>
#cart-table{
    width: 100%;
    height: auto;
    text-align: center;
    display: grid;
    justify-items: center;
}
@media (max-width:1200px) {
    #cart-table{
        width: 100%;
        overflow: scroll;
    }
}
#cart-table tr td,th{
    padding: 10vh;
}
#order{
    width: 100%;
    display: flex;
    padding: 5px;
}
#order button{
    margin-left: auto;
}
#order h1{
    margin-right: auto;
}
</style>