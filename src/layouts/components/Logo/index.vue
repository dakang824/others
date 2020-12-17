<!--
 * @Author: yukang 1172248038@qq.com
 * @Description: 
 * @Date: 2020-12-16 20:34:11
 * @LastEditTime: 2020-12-17 12:56:40
-->
<template>
  <div class="logo-container">
    <router-link to="/">
      <!-- <vab-remix-icon class="logo" icon-class="chat-smile-3-fill" /> -->
      <img src="@/assets/logo.png" class="logo" />
      <span class="title" :title="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Logo",
  data() {
    return {
      title: this.$baseTitle,
    };
  },
  computed: {
    ...mapGetters(["logo", "layout"]),
  },
};
</script>
<style lang="scss" scoped>
.logo-container {
  min-width: 366px;
  margin-right: 20px;
}

@mixin container {
  position: relative;
  height: 56px;
  overflow: hidden;
  line-height: 56px;
  background: $base-color-header;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 10px;
  color: $base-title-color;
  vertical-align: middle;
}

@mixin title {
  display: inline-block;
  overflow: hidden;
  font-size: $base-font-size-max;
  line-height: 55px;
  color: $base-title-color;
  vertical-align: middle;
}

.logo-container {
  text-align: center;

  .logo {
    @include logo;
  }

  .title {
    @include title;
  }
}
</style>
