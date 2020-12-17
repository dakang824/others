<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        handleChildren(item.children, item) &&
        (!onlyOneChildren.children || onlyOneChildren.notShowChildren) &&
        !item.alwaysShow
      "
    >
      <app-link
        v-if="onlyOneChildren.meta"
        :target="onlyOneChildren.meta.target ? onlyOneChildren.meta.target : ''"
        :to="onlyOneChildren.disable ? '' : onlyOneChildren.path"
        :class="onlyOneChildren.disable ? 'disable' : ''"
      >
        <el-menu-item
          :class="{ 'submenu-title-noDropdown': !isNest }"
          :index="handlePath(onlyOneChildren.path)"
        >
          <vab-icon
            v-if="onlyOneChildren.meta && onlyOneChildren.meta.icon"
            :icon="['fas', onlyOneChildren.meta.icon]"
            class="vab-nav-icon"
          />
          <vab-remix-icon
            v-if="onlyOneChildren.meta && onlyOneChildren.meta.remixIcon"
            :icon-class="onlyOneChildren.meta.remixIcon"
            class="vab-nav-icon"
          />
          <span slot="title">{{ onlyOneChildren.meta.title }}</span>
          <el-tag
            v-if="onlyOneChildren.meta && onlyOneChildren.meta.badge"
            type="danger"
            effect="dark"
          >
            {{ onlyOneChildren.meta.badge }}
          </el-tag>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="handlePath(item.path)">
      <template slot="title">
        <vab-icon
          v-if="item.meta && item.meta.icon"
          :icon="['fas', item.meta.icon]"
          class="vab-nav-icon"
        />
        <vab-remix-icon
          v-if="item.meta && item.meta.remixIcon"
          :icon-class="item.meta.remixIcon"
          class="vab-nav-icon"
        />
        <span>{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :base-path="handlePath(child.path)"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import AppLink from "@/layouts/components/Link";

export default {
  name: "SideBarItem",
  components: { AppLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    handleChildren(children = [], parent) {
      if (children === null) children = [];
      const showChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChildren = item;
          return true;
        }
      });
      if (showChildren.length === 1) {
        return true;
      }

      if (showChildren.length === 0) {
        this.onlyOneChildren = {
          ...parent,
          notShowChildren: true,
        };
        return true;
      }
      return false;
    },
    handlePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style lang="scss" scoped>
.vab-nav-icon {
  margin-right: 4px;
}

.disable {
  pointer-events: none;
  cursor: not-allowed;

  .el-menu-item {
    opacity: 0.6;
  }
}

::v-deep {
  .el-tag {
    float: right;
    height: 16px;
    padding-right: 3px;
    padding-left: 3px;
    margin-top: 15px;
    line-height: 13px;
  }
}
</style>
