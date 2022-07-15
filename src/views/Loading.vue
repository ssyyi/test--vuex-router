<template>
  <h1>登录中……</h1>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$store.watch(
      //观察登陆状态，判断是否登陆
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router.push(this.$route.query.returnurl || "/home");
          // .catch(() => {});
        }
      },
      { immediate: true }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>

<style>
</style>