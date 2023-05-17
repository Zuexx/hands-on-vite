<script setup lang="ts">
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { onBeforeMount, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getCurrentUser } from "vuefire";
import { AuthError, TypedDictionary } from "../utils/common.type";
import { normalizeError } from "../utils/common.utils";
import { auth } from "../utils/firebase";

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    const to =
      route.query.redirect && typeof route.query.redirect === "string"
        ? route.query.redirect
        : "/";

    router.push(to);
  }
});

const email = ref("");
const password = ref("");
const confirm = ref("");
const errEmail = ref<string | undefined>(undefined);
const errPassword = ref<string | undefined>(undefined);
const errConfirm = ref<string | undefined>(undefined);

const data = ref<AuthError | User>();

const registerWithEmailAndPassword = async () => {
  let errors: TypedDictionary = {
    email: email.value ? undefined : "Email is required",
    password: password.value ? undefined : "Password is required",
    confirm: confirm.value ? undefined : "Confirm Password is required",
    noMatch:
      confirm.value === password.value
        ? undefined
        : "Confirm Password is not matched",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  errEmail.value = hasErrors ? errors["email"] : undefined;
  errPassword.value = hasErrors ? errors["password"] : undefined;
  errConfirm.value = hasErrors
    ? !errors["confirm"]
      ? errors["confirm"]
      : errors["noMatch"]
    : undefined;

  if (hasErrors) {
    return {
      errorCode: "auth/field-validation-failed",
      errorMessage: "Login Form Error",
      errorFields: [...(await normalizeError(errors))],
    };
  }

  await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => router.push({ path: "/" }))
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        errorMessage = "The password is too weak";
      }
      data.value = { errorCode, errorMessage };
    });
};
</script>

<template>
  <section>
    <span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span
    ><span></span><span></span><span></span><span></span><span></span>
    <div class="signup">
      <div class="content">
        <h2>Sign Up</h2>
        <form
          method="post"
          @submit.prevent="registerWithEmailAndPassword"
          class="form"
          noValidate
        >
          <div class="inputBx">
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              required
            />
            <label htmlFor="email">Email</label>
            <h3 v-if="errEmail !== undefined">{{ errEmail }}</h3>
          </div>
          <div class="inputBx">
            <input
              type="password"
              id="password"
              name="password"
              v-model="password"
              required
            />
            <label htmlFor="password">Password</label>
            <h3 v-if="errPassword !== undefined">{{ errPassword }}</h3>
          </div>
          <div class="inputBx">
            <input
              type="password"
              id="confirm"
              name="confirm"
              v-model="confirm"
              required
            />
            <label htmlFor="confirm">Confirm Password</label>
            <h3 v-if="errConfirm !== undefined">{{ errConfirm }}</h3>
          </div>
          <div class="links">
            <RouterLink to="/login">Already have an account?</RouterLink>
          </div>
          <div class="inputBx">
            <button type="submit">Register</button>
          </div>
        </form>
        {{ data && (data as AuthError).errorCode }}
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/components/SignUp.css"></style>
