<template>
  <div>
    <Navbar />
     <Nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/navbar.vue";
import SearchForm from '~/components/searchForm.vue';

export default {
  components: {
    Navbar,
    SearchForm,
  },
   
  }
</script>
