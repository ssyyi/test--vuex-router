<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">HOME</router-link>
      \
      <router-link to="/news">NEWS</router-link>
      \
      <user-name />
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import UserName from "./components/UserName.vue";
export default {
  components: { UserName },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
