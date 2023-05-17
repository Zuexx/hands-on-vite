<script setup lang="ts">
import { signOut } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";

const handleSignOut = async () => {
  const auth = useFirebaseAuth()!;
  await signOut(auth);
};
</script>

<template>
  <div data-theme="luxury" class="container">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/login" class="link">Login</router-link>
    <router-link to="/register" class="link">Register</router-link>
    <router-link to="/forget" class="link">Forget Password</router-link>
    <button class="link" @click.prevent="handleSignOut">Logout</button>
    <router-view />
  </div>
</template>

<style scoped src="./assets/App.css"></style>
