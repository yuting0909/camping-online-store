<template>
  <div id="nav" v-show="this.$route.meta.navShow">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <main>
    <router-view/>
  </main>
</template>
