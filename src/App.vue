<template>
  <div id="nav">
    <router-link to="/cards">ADD CARD</router-link> |
    <router-link to="/addcard">ADD NEW CARD</router-link>
  </div>
  <router-view />
</template>

<script setup></script>

<style>
#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
