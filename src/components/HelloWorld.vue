<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <form @submit.prevent="addLink">
      <input type="text" placeholder="add a task..." class="link-input" v-model="newLink"/>
    </form>
    <ul>
      <li v-for="(link,index) in links" v-bind:key="index">
        <input type="checkbox">
        {{ link }}
        <button v-on:click="removeLinks(index)" class="rm">Remove</button>
        </li>
    </ul>
    <User/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import user from './UserRegistration';
export default {
  name: 'HelloWorld',
  components: {
    User
  },
  data () {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink: function () {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function (link) {
      this.removeLink(link)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
    background-image: url('../assets/background.jpg');
    background-attachment: fixed;
  }
  .left, .right {
    padding: 30px;
  }
  h1{
    color: white;
    text-align: center;
    position: relative;
    margin: auto;
    margin-top: 50px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
   li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
    border: 4px solid black;
    border-radius: 10px;
    box-shadow: 0 5px 5px black;
    background-color: #ececec;
    margin-left: 19px;
    margin-right: 19px;
    font-size: 20px;
    font-weight: 700;

  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
  input.link-input{
    border: 4px solid black;
    border-radius: 10px;
    width: 300px;
    margin-left: 19px;
    padding: 20px;
    box-shadow: 0 5px 5px black;
    margin-bottom: 50px;
    outline: none;
    background-color: #ececec;
  }
  button{
    float: right;
    background-color: #ff7a7a;
    border: 2px solid #1e1e1e;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    top: -7px;
    cursor: pointer;
  }
::placeholder {
  font-size: 1.5em;
}
</style>
