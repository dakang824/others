<template>
  <div>
    <div :class="header === 'fixed' ? 'fixed-header' : ''">
      <nav-bar />
    </div>
    <div class="vue-admin-beautiful-wrapper" :class="classObj">
      <div
        class="layout-container-vertical"
        :class="{
          fixed: header === 'fixed',
          'no-tags-bar': tagsBar === 'false' || tagsBar === false,
        }"
      >
        <div
          v-if="device === 'mobile' && collapse === false"
          class="mask"
          @click="handleFoldSideBar"
        />
        <side-bar />
        <div class="vab-main" :class="collapse ? 'is-collapse-main' : ''">
          <tags-bar v-if="tagsBar === 'true' || tagsBar === true" />
          <second-side />
          <app-main />
        </div>
      </div>
      <back-to-top transition-name="fade"></back-to-top>
    </div>
  </div>
</template>

<script>
import {
  AppMain,
  BackToTop,
  NavBar,
  SideBar,
  TagsBar,
  SecondSide,
} from "./components";
import { mapGetters } from "vuex";
import { tokenName } from "@/config/settings";
import Media from "zx-media/mixin/Media";

export default {
  name: "Layout",
  components: {
    NavBar,
    SideBar,
    AppMain,
    TagsBar,
    BackToTop,
    SecondSide,
  },
  mixins: [Media],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      layout: "settings/layout",
      tagsBar: "settings/tagsBar",
      collapse: "settings/collapse",
      header: "settings/header",
      device: "settings/device",
    }),
    classObj() {
      return {
        mobile: this.device === "mobile",
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener(
        "storage",
        (e) => {
          if (e.key === tokenName || e.key === null) window.location.reload();
          if (e.key === tokenName && e.value === null) window.location.reload();
        },
        false
      );
    });
  },
  methods: {
    handleFoldSideBar() {
      this.$store.dispatch("settings/foldSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin fix-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $base-z-index - 2;
  width: 100%;
  overflow: hidden;
}

.vue-admin-beautiful-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .layout-container-vertical {
    position: relative;

    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: $base-z-index - 1;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
      opacity: 0.5;
    }

    &.fixed {
      // padding-top: 96px;
    }

    &.fixed.no-tags-bar {
      padding-top: 56px;
    }

    .vab-main {
      position: relative;
      min-height: 100%;
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      transition: all 0.2s ease-in-out;

      ::v-deep {
        .fixed-header {
          @include fix-header;

          left: $base-left-menu-width;
          width: $base-right-content-width;
          box-shadow: $base-box-shadow;
          transition: all 0.2s ease-in-out;
        }

        .nav-bar-container {
          position: relative;
          box-sizing: border-box;
        }

        .tags-bar-container {
          box-sizing: border-box;
          padding-right: 5px;
          padding-left: 5px;
        }

        .app-main-container {
          width: calc(100% - 30px);
          min-height: calc(100vh - 127px);
          margin: 15px auto;
          background: $base-color-white;
          border-radius: $base-border-radius;
          box-shadow: $base-box-shadow;
        }
      }

      &.is-collapse-main {
        margin-left: $base-left-menu-width-min;

        ::v-deep {
          .fixed-header {
            left: $base-left-menu-width-min;
            width: calc(100% - 65px);
          }
        }
      }
    }
  }

  /* 手机端开始 */
  &.mobile {
    ::v-deep {
      .el-pager,
      .el-pagination__jump {
        display: none;
      }

      .layout-container-vertical {
        .el-scrollbar.side-bar-container.is-collapse {
          width: 0;
        }

        .vab-main {
          width: 100%;
          margin-left: 0;

          .app-main-container {
            width: calc(100% - 10px) !important;
            margin: 5px !important;
          }
        }
      }

      .vab-main {
        .fixed-header {
          left: 0 !important;
          width: 100% !important;
        }
      }
    }
  }

  /* 手机端结束 */
}
</style>
