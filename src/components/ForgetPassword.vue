<script setup lang="ts">
import { sendPasswordResetEmail } from "firebase/auth";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCurrentUser, useFirebaseAuth } from "vuefire";
import { AuthError, Success, TypedDictionary } from "../utils/common.type";
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
const errEmail = ref<string | undefined>(undefined);
const data = ref<AuthError | Success | undefined>();

const handSendResetPasswordMail = async () => {
  let errors: TypedDictionary = {
    email: email.value ? undefined : "Email is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  errEmail.value = hasErrors ? errors["email"] : undefined;

  if (hasErrors) {
    return {
      errorCode: "auth/field-validation-failed",
      errorMessage: "Reset Password Error",
      errorFields: [...(await normalizeError(errors))],
    };
  }

  const auth = useFirebaseAuth()!;
  await sendPasswordResetEmail(auth, email.value)
    .then(
      () =>
        (data.value = {
          successCode: "auth/send-password-reset-email",
          successMessage:
            "Please check your email for the reset password link.",
        })
    )
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
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
    <div class="forget">
      <div class="content">
        <h2>Forget Password</h2>
        <form
          method="post"
          class="form"
          noValidate
          @submit.prevent="handSendResetPasswordMail"
        >
          <div class="inputBx">
            <input
              type="email"
              id="email"
              name="email"
              required
              v-model="email"
            />
            <label htmlFor="email">Email</label>
            <h3 v-if="errEmail !== undefined">{{ errEmail }}</h3>
          </div>
          <div class="inputBx">
            <button type="submit">Reset Your Password</button>
          </div>
        </form>
        {{
          data &&
          ((data as AuthError).errorCode || (data as Success).successCode)
        }}
      </div>
    </div>
  </section>
</template>

<style scoped src="../assets/components/ForgetPassword.css"></style>
