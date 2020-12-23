<template>
  <div class="container memForm">
    <div class="row justify-content-center">
      <div class="col-4 shadow p-5 rounded">
        <form @submit.prevent="register" action="post">
          <div class="form-group">
            <label for="usrnm">یک نام کاربری برای خود انتخاب کنید:</label>
            <input
              type="text"
              id="usrnm"
              class="form-control form-control-sm"
              placeholder="username"
              v-model="form.name"
            />
          </div>
          <div class="form-group">
            <label for="usrpass"
              >یک پسورد برای حساب کاربری خود انتخاب نماید</label
            >
            <input
              type="password"
              id="usrpass"
              class="form-control form-control-sm"
              placeholder="userpassword"
              v-model="form.password"
            />
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label font-size-13 mr-3" for="gridCheck">
                مرا به خاطر بسپار
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="usrml"
              >یک ایمیل معتبر برای حساب کاربری خود وارد نماید</label
            >
            <input
              type="email"
              class="form-control form-control-sm"
              id="usrml"
              placeholder="usermail"
              v-model="form.email"
            />
          </div>
          <input
            type="submit"
            class="btn btn-sm btn-warning"
            value=" عضویت در بوتیک پلاس "
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
   async register(){
      await this.$axios.post('auth/register', this.form);

      this.$auth.login(this.form);

      this.$router.pugh({name: 'index'});
    }
  }
};
</script>
