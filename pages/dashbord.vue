<template>
  <div>
      Welcome to yout dashbord {{user.name}}
  </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>