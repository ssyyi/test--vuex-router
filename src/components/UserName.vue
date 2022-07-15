<template>
  <div class="userName">
    <span v-if="status === 'loading'">loading……</span>

    <template v-else-if="status === 'login'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a href="" @click.prevent="handleLoginOut">退出</a>
    </template>

    <router-link v-else to="/login" exact-path>login</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]), //获取status，判断登陆状态
    ...mapState("loginUser", ["user"]), //获取user，判断是否为null
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.userName {
  display: inline-block;
}
.userName a,
.userName span {
  margin-right: 10px;
}
</style>