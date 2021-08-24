<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about">About</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/signup">sign up</router-link>
    <router-link to="/logout">logout</router-link>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  
}
</style>
