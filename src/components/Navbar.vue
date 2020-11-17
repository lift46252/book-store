<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link id="brand" to="/Home">
        <b-icon icon="book"></b-icon>
        BookStore
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
            <router-link to="/Home">Home</router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
            <router-link to="/Cart">
                <b-icon id="cart" icon="cart"></b-icon>
                {{getItemsCounter}}items(${{getPrice}})
            </router-link> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:mapGetters(['getItemsCounter','getPrice'])

}
</script>

<style>
a{
    color: white;
    font-size: 20px;
}
a:hover{
    color: white;
}
#cart{
    font-size:30px;
}
#cart:hover{
    font-size:32px;
}
#brand{
    font-size: 30px;
    width: auto;
    margin: 0px 10px 0px 0px;
}
</style>