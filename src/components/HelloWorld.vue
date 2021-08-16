<template>
  <div class="hello">
    <h1>{{ msg || 'Pou sai re arxidi' }}</h1>
    <div class="wrapper">Add An Item :<br>
      <div class="additem">
        <label>
          <input v-model="newitem" type="text" class="form__input" id="name" placeholder="Add Item..."/>
        </label>
        <button v-on:click="items.push({id:items.lenght +1, label: newitem})">Add</button>
      </div>
     <br>
     <ul>
       <li v-for="item in items" :key="item.id">{{item.label}}</li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
      newitem :'',
      items:[

      ]
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form__input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 50%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

}
.wrapper {
  margin : auto;
  width : 40vw;
  height: 20vh;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
