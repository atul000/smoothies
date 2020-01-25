<template>
  <div id="app">
    <Navbar />
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
