<!--
 * @Author: yukang 1172248038@qq.com
 * @Description: 
 * @Date: 2020-12-17 00:03:18
 * @LastEditTime: 2020-12-17 12:17:15
-->
<template>
  <div>
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(route, index) in secondSide.children"
        :key="index"
        :index="index"
      >
        {{ route.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import path from "path";
import { isExternal } from "@/utils/validate";
export default {
  components: {},
  data() {
    return {
      activeIndex: "0",
    };
  },
  computed: {
    ...mapGetters({
      secondSide: "permission/secondSide",
    }),
  },
  created() {
    this.$baseEventBus.$on("tableActive", (e) => {
      this.handleSelect(0);
    });
  },
  methods: {
    handleSelect(e, s) {
      const secondSide = this.secondSide;
      this.activeIndex = e;
      const data = JSON.parse(JSON.stringify(secondSide));
      const baseUrl = this.getPath1(secondSide.path, secondSide.children[e]);
      let arr = [];

      if ("children" in secondSide.children[e]) {
        arr = data.children[e].children.map((item) => {
          item.path = baseUrl + "/" + item.path;
          return item;
        });
        this.$store.dispatch("permission/setPartialRoutes", arr);
        this.$router.push(arr[0].path);
      } else {
        this.$store.dispatch("permission/setPartialRoutes", arr);
        this.$router.push(
          this.getPath(secondSide.path, secondSide.children[e])
        );
      }
    },
    getPath1(pathUrl, routePath) {
      return path.resolve(pathUrl, routePath.path);
    },
    getPath(pathUrl, routePath) {
      return path.resolve(
        pathUrl,
        "children" in routePath
          ? routePath.path + "/" + routePath.children[0].path
          : routePath.path
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
