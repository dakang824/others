<!--
 * @Author: yukang 1172248038@qq.com
 * @Description: 
 * @Date: 2020-12-16 20:34:11
 * @LastEditTime: 2020-12-18 22:10:42
-->
<template>
  <a v-bind="linkProps(to, target)">
    <slot />
  </a>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  name: "Link",
  props: {
    to: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    linkProps(url, target) {
      if (this.disabled) {
        return;
      }
      if (isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener",
        };
      }
      if (target == "_blank") {
        return {
          is: "router-link",
          target: "_blank",
          to: url,
        };
      } else {
        return {
          is: "router-link",
          to: url,
        };
      }
    },
  },
};
</script>
