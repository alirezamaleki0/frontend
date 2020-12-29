<template>
  <div>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col sm="12" lg="6">
            <v-form v-model="isFormValid">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="نام کاربری"
                required
                counter="12"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                v-if="isRegisterForm"
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="ایمیل"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'Password'"
                name="email"
                label="رمز عبور"
                hint=""
                @click:append="showPassword = !showPassword"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :type="showConfirmation ? 'text' : 'password'"
                :error-messages="confirmPasswordErrors"
                label="تایید رمز عبور"
                required
                @input="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
                :append-icon="showConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showConfirmation = !showConfirmation"
                v-if="isRegisterForm"
                prepend-icon="mdi-lock-check"
              />
              <v-btn
                class="my-4"
                @click="submitForm({ name, email, password })"
                :disabled="!isFormValid"
              >
                {{ buttonText }}
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(4), maxLength: maxLength(12) },
    email: { required, email },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },
  props: ["submitForm", "buttonText", "isRegisterForm"],
  data() {
    return {
      isFormValid: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmation: false,
      rules: {
        required: (value) => !!value || "وارد کردن رمز عبور الزامی است",
        min: (v) => v.length >= 8 || "رمز عبور باید حداقل ۸ کاراکتر باشد",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("نام کاربری باید حداکثر ۱۲ کاراکتر باشد");
      !this.$v.name.minLength &&
        errors.push("نام کاربری باید حداقل ۴ کاراکتر باشد");
      !this.$v.name.required && errors.push("وارد کردن نام کاربری الزامی است");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("عبارت وارد شده یک ایمیل نیست");
      !this.$v.email.required && errors.push("وارد کردن ایمیل الزامی است");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("عبارت وارد شده با رمز عبور یکسان نیست");
      return errors;
    },
    async clearData(){
      this.password = '';
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>