<script setup lang="ts">
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCurrentUser, useFirebaseAuth } from "vuefire";
import { AuthError, TypedDictionary } from "../utils/common.type";
import { normalizeError } from "../utils/common.utils";

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
const errEmail = ref<string | undefined>(undefined);
const errPassword = ref<string | undefined>(undefined);

const data = ref<AuthError | User>();

const loginInWithEmailAndPassword = async () => {
  let errors: TypedDictionary = {
    email: email.value ? undefined : "Email is required",
    password: password.value ? undefined : "Password is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  errEmail.value = hasErrors ? errors["email"] : undefined;
  errPassword.value = hasErrors ? errors["password"] : undefined;

  if (hasErrors) {
    return {
      errorCode: "auth/field-validation-failed",
      errorMessage: "Login Form Error",
      errorFields: [...(await normalizeError(errors))],
    };
  }

  const auth = useFirebaseAuth()!;

  await signInWithEmailAndPassword(auth, email.value, password.value)
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
    <div class="signin">
      <div class="content">
        <h2>Sign In</h2>
        <form
          method="post"
          class="form"
          noValidate
          @submit.prevent="loginInWithEmailAndPassword"
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
            <h3 v-if="!errPassword !== undefined">{{ errPassword }}</h3>
          </div>
          <div class="links">
            <RouterLink to="/forget">Forget Password</RouterLink>
            <RouterLink to="/register">Sign Up</RouterLink>
          </div>
          <div class="inputBx">
            <button type="submit">Login</button>
          </div>
        </form>
        {{ data && (data as AuthError).errorCode }}
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/components/SignIn.css"></style>
