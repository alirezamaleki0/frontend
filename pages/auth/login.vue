<template>
  <!-- <div class="container memForm">
    <div class="row justify-content-center">
      <div class="col-4 shadow p-5 rounded">
        <form @submit.prevent="login" action="post">
          <div class="form-group">
            <label for="usrnm">نام کاربری یا ایمیل خود را وارد نمایید:</label>
            <input
              type="text"
              id="usrnm"
              class="form-control form-control-sm"
              placeholder="username"
              v-model="form.email"
              :class="{ 'is-invalid': errors.email }"
            />
            <small class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </small>
          </div>

          <div class="form-group">
            <label for="usrpass">رمز عبور خود را وارد نمایید:</label>
            <input
              type="password"
              id="usrpass"
              class="form-control form-control-sm"
              placeholder="userpassword"
              v-model="form.password"
              :class="{ 'is-invalid': errors.password }"
            />
            <small class="invalid-feedback" v-if="errors.password">{{
              errors.password[0]
            }}</small>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label font-size-13 mr-3" for="gridCheck">
                مرا به خاطر بسپار
              </label>
            </div>
          </div>

          <input type="submit" class="btn btn-sm btn-warning" value=" ورود " />
        </form>
      </div>
    </div>
  </div> -->
  <div>
    <Auth buttonText=" ورود " :submitForm="loginUser"/>
  </div>
</template>

<script>
  import Auth from "@/components/partials/authForm";
export default {
components:{
  Auth
},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
     loginUser(loginInfo) {
       debugger
    //   try {
    //    await this.$auth.loginWith('local',{data: this.form});
    //    this.$auth.fetchUser();
    //    this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');

    //  } catch (error) {
    //    console.log(error)
    //  }
    },
  },
};
</script>

<style>
</style>
