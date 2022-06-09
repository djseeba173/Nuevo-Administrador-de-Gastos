<template>
  <div>
    <h2>LogOut</h2>
    <button @click="logout"> LogOut </button>
  </div>
</template>

<script>
import { usuarioStore } from "../store/usuarioStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    // const { userLogout } = storeToRefs(store);

    return {
      store,
      // userLogout,
    };
  },
  methods:{
      logout(){
          debugger
          this.store.userLogout()
          this.$router.go('/login')
      }
  }
};
</script>

<style></style>
