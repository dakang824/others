<!--
 * @Author: yukang 1172248038@qq.com
 * @Description: 
 * @Date: 2020-12-17 14:23:19
 * @LastEditTime: 2020-12-18 13:23:05
-->
<template>
  <div>
    <img src="@/assets/image/home_01.png" width="100%" @click="handleClick" />
  </div>
</template>

<script>
export default {
  name: "DockingCaseManagement",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    async handleClick() {
      await this.$store.dispatch("user/login", {
        userName: "admin",
        password: "123456",
      });
      this.$router.push({ path: "/" }).catch((error) => {});
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
