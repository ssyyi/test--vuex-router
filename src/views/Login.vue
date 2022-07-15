<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{ loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: mapState("loginUser", ["loading"]),
  methods: {
    async handleSubmit() {
      const res = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (res) {
        const path = this.$route.query.returnurl || "/";
        this.$router.push(path);
      } else {
        alert("帐号或密码错误");
      }
    },
  },
};
</script>

<style>
</style>