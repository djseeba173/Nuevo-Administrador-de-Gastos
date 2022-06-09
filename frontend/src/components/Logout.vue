<template>
  <div>
    <button class="miBoton" @click="logout"> LogOut </button>
  </div>
</template>

<script>
import { usuarioStore } from "../store/usuarioStore";

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

<style>
.miBoton{
  margin-top: 20px;
  font-size: 20px;
  width: 150px;
  height: 40px;
}

</style>
