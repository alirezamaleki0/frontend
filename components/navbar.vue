<template>
  <div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user.name }}
    </div>
    <div v-else>
      <nuxt-link to='/auth/login'>ورود</nuxt-link>
      <br>
      <nuxt-link to='/auth/register'>عضویت</nuxt-link>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$auth.logout();
    },
  },
};
</script>