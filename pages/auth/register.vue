<template>
  <!-- <div class="container memForm">
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
              :class="{'is-invalid': errors.name}"
            />
            <small class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</small>
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
              :class="{'is-invalid': errors.password}"
            />
             <small class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</small>
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
              :class="{'is-invalid': errors.email}"
            />
          <small class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</small>
          </div>
          <input
            type="submit"
            class="btn btn-sm btn-warning"
            value=" عضویت در بوتیک پلاس "
          />
        </form>
      </div>
    </div>
  </div> -->

  <div>
    <Auth buttonText=" عضویت " :submitForm="registerUser" isRegisterForm="true" />
  </div>
</template>

<script>
import Auth from "@/components/partials/authForm";
export default {
  components: {
    Auth,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
     registerUser(registrationInfo) {
       debugger
      // try {
      //   await this.$axios.post("auth/register", this.form);

      //   this.$auth.login({ data: this.form });

      //   this.$router.push({ name: "index" });
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
};
</script>
