<template>
  <div class="nav-bar-container">
    <div class="nav-bar">
      <logo />

      <!-- <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
        </div> -->
      <div class="right-panel">
        <div style="display: flex; align-items: center">
          <a
            style="padding: 0 25px; font-size: 15px; color: #fff"
            @click="handleGoHome"
          >
            首页
          </a>
          <el-tabs v-model="tab" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item, index) in handleRoutes"
              :key="index"
              :name="'' + index + ''"
              :label="item"
            ></el-tab-pane>
          </el-tabs>
        </div>

        <div class="right-panel_info">
          <error-log></error-log>
          <full-screen-bar @refresh="refreshSelectedTag"></full-screen-bar>
          <vab-icon
            title="重载路由"
            :pulse="pulse"
            :icon="['fas', 'redo']"
            @click="refreshSelectedTag"
          ></vab-icon>
          <div>
            <div
              @mouseenter="$refs.dropdownNews.open()"
              @mouseleave="$refs.dropdownNews.close()"
            >
              <el-badge is-dot>
                <DropdownNews ref="dropdownNews" />
                <i
                  class="el-icon-bell icon"
                  style="font-size: 17px; font-weight: bold"
                ></i>
              </el-badge>
            </div>
          </div>

          <avatar></avatar>
        </div>
        <!--  <vab-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          />-->
      </div>
    </div>
  </div>
</template>

<script>
import path from "path";
import { mapGetters } from "vuex";
import Logo from "@/layouts/components/Logo";
import { Avatar, FullScreenBar, ErrorLog } from "@/layouts/components";
import { isExternal } from "@/utils/validate";
import DropdownNews from "@/components/dropdownNews.vue";
export default {
  name: "NavBar",
  components: {
    ErrorLog,
    FullScreenBar,
    Avatar,
    Logo,
    DropdownNews,
  },
  data() {
    return {
      tab: "0",
      pulse: false,
    };
  },
  computed: {
    ...mapGetters({
      avatar: "user/avatar",
      collapse: "settings/collapse",
      userName: "user/userName",
      visitedRoutes: "tagsBar/visitedRoutes",
      device: "settings/device",
      routes: "permission/routes",
    }),

    handleRoutes() {
      let arr = this.routes.map((item) => {
        if (item.meta) {
          return item.meta.title;
        }
      });
      return arr.filter((d) => d);
    },
  },
  created() {
    let allArr = [];
    let arr = this.routes.map((item, index) => {
      if (item.meta) {
        allArr.push(item);
      }
    });
    this.handleClick({ index: 0 });
  },
  methods: {
    handleGoHome() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login`);
      });
    },
    handleClick(tab) {
      let index = tab.index;
      let allArr = [];
      let arr = this.routes.map((item, index) => {
        if (item.meta) {
          allArr.push(item);
        }
      });

      this.$router.push(this.getPath(allArr[index]));
      this.$store.commit("permission/setSecondSide", allArr[index]);
      this.$store.dispatch("permission/setPartialRoutes", {});
      this.$baseEventBus.$emit("tableActive", allArr[index]);
    },
    handleCollapse() {
      this.$store.dispatch("settings/changeCollapse");
    },
    async logout() {
      await this.$baseConfirm(
        "您确定要退出" + this.$baseTitle + "吗?",
        null,
        () => {
          const fullPath = this.$route.fullPath;
          this.$store.dispatch("user/logout").then(() => {
            this.$router.push(`/login?redirect=${fullPath}`);
          });
        }
      );
    },
    getPath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      return path.resolve(
        routePath.path,
        "children" in routePath.children[0]
          ? routePath.children[0].path +
              "/" +
              routePath.children[0].children[0].path
          : routePath.children[0].path
      );
    },
    refreshSelectedTag() {
      this.pulse = true;
      this.$router
        .replace({
          path: "/redirect" + this.$route.fullPath,
        })
        .then(() => {
          setTimeout(() => {
            this.pulse = false;
          }, 1000);
        })
        .catch(() => {});
    },
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.logout();
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar-container {
  position: relative;
  height: 60px;
  user-select: none;
  background: $base-color-default;
  box-shadow: $base-box-shadow;

  .nav-bar {
    display: flex;
    align-items: content;
    justify-content: space-between;
  }

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;
    max-height: 60px;

    .fold-unfold {
      margin-left: 10px;
      font-size: 20px;
      color: $base-color-gray;
      cursor: pointer;
    }

    ::v-deep {
      .breadcrumb-container {
        margin-left: 10px;
      }
    }
  }

  .right-panel {
    display: flex;
    flex: 1;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: 60px;

    .right-panel_info {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;
    }

    ::v-deep {
      .el-tabs {
        margin-right: 15px;

        .el-tabs__item.is-top {
          padding: 0 20px !important;
          text-align: center;
        }

        .el-tabs__header {
          margin: 0;
        }

        .el-tabs__item {
          height: 60px;
          font-size: 15px;
          line-height: 60px;
          color: #fff;
        }

        .is-active {
          background: rgba(0, 0, 0, 0.1);
        }
      }

      .el-tabs__nav-wrap::after {
        height: 0;
      }

      .user-avatar {
        margin-right: 5px;
        font-weight: 600;
        cursor: pointer;
      }

      .user-name {
        position: relative;
        top: -14px;
        margin-right: 35px;
        margin-left: 5px;
        font-weight: 600;
        cursor: pointer;
      }

      .user-name + i {
        position: absolute;
        top: 16px;
        right: 15px;
      }

      svg {
        width: 1em;
        height: 1em;
        margin-right: 15px;
        font-size: $base-font-size-big;
        color: $base-color-gray;
        cursor: pointer;
        fill: $base-color-gray;
      }

      button {
        svg {
          margin-right: 0;
          color: $base-color-white;
          cursor: pointer;
          fill: $base-color-white;
        }
      }

      .el-badge {
        margin-right: 15px;
      }
    }
  }
}
</style>
