<template>
  <div class="container bg-light">
  user: {{this.$auth.loggedIn}}
  </div>
</template>

<script>
import Slider from '~/components/slider.vue';
export default {
  components:{
    Slider
  },

};
</script>
