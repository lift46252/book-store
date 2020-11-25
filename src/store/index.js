// import { findIndex } from "core-js/fn/array"
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    data: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        author: "Lorem ipsum dolor sit amet consectetur",
        price: 42,
        cover: "./images/book-1.png"
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit.",
        author: "Lorem ipsum dolor sit amet",
        price: 27,
        cover: "./images/book-2.png"
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        author: "Lorem ipsum dolor sit",
        price: 63,
        cover: "./images/book-3.png"
      }
    ],
    items: [],
    itemsCounter: 0,
    price: 0,
    addTitle:'',
    addAuthor:'',
    addPrice:0,
    addImage:'',
    oldPrice:0,
    oldCountBook:0
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getItemsCounter(state) {
      return state.itemsCounter;
    },
    getPrice(state) {
      return state.price;
    },
    getItemsCart(state) {
      return state.items;
    },
    getCountBook(state) {
      return state.countBook;
    },
  },
  mutations: {
    countItem(state) {
      return state.itemsCounter++;
    },
    setCountItem(state,value){
      return state.itemsCounter += value.value - value.old;
    },
    totalPrice(state, value) {
      return (state.price += value);
    },
    setTotalPrice(state,value){
      return (state.price += value.value.price * (value.value.countBook - value.old));
    },
    addItems(state, values) {
      values.countBook = 1;
      state.items = state.items.concat([values]);
    },
    incrementBook(state, id) {
      state.items = state.items.map((book)=>{
        if (book.id === id) {
            book.countBook++
        }
        return book
      })
    },
    decrementBookCount(state, id) {
      state.items = state.items.map(book => {
        if (book.id === id && book.countBook > 1) {
          book.countBook--;
          state.itemsCounter--;
          state.price -= book.price;
        }
        return book;
      });
    },
    deleteOneBook(state, id) {
      state.items.findIndex((book, index) => {
        if (book.id === id) {
          state.price =
            state.price -
            state.items[index].price * state.items[index].countBook;
          state.itemsCounter =
            state.itemsCounter - state.items[index].countBook;
          state.items.splice(index, 1);
        }
      });
    },
    deleteAllBook(state) {
      state.itemsCounter = 0;
      state.price = 0;
      state.items = [];
    },
    setTitle(state,value){
      return state.addTitle = value
    },
    setAuthor(state,value){
      return state.addAuthor = value
    },
    setAddPrice(state,value){
      return state.addPrice = Number(value)
    },
    setImage(state,value){
      return state.addImage = value
    }
  },
  actions: {
    addToCart({commit, state}, book) {
      commit("countItem");
      commit("totalPrice", book.price);

      let foundBook = state.items.find(item => item.id === book.id);

      if (!foundBook) {
        commit("addItems", book);
      } else {
        commit("incrementBook", book.id);
      }
    },
    incrementBookCount({state, commit}, id) {
      state.items = state.items.map(book => {
        if (book.id === id) {
          book.countBook++;
          commit("countItem");
          commit("totalPrice", book.price);
        }
        return book;
      });
    },
    setCountBook({state,commit},obj) {
      state.items = state.items.map(book => {
        if (book.id === obj.id && obj.value > 0 ) {        
          state.oldCountBook = book.countBook
          book.countBook = obj.value;            
          commit("setCountItem",{value:obj.value,old:state.oldCountBook});
          commit("setTotalPrice",{value:book,old:state.oldCountBook});  
        }
        return book;
      });
    },
    addBook({state}){
      const value = {
        id: state.data[state.data.length - 1].id + 1,
        title: state.addTitle,
        author: state.addAuthor,
        price: state.addPrice,
        cover: state.addImage
        
      }
      state.data.push(value)
      alert('Succes')
    }    
  }

});
