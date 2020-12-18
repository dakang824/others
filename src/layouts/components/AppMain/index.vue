<template>
  <section class="app-main-container">
    <github-corner v-if="nodeEnv"></github-corner>
    <vab-keel v-if="show" style="margin: 15px">
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="7" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="6" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="8" />
    </vab-keel>
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedRoutes" :max="10">
        <router-view :key="key" style="min-height: 82vh" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { VabKeel, VabKeelHeading, VabKeelText } from "@/plugins/vabKeel";
import { mapGetters } from "vuex";
import GithubCorner from "@/components/GithubCorner";
import { copyright } from "@/config/settings";

export default {
  name: "AppMain",
  components: {
    VabKeel,
    VabKeelHeading,
    VabKeelText,
    GithubCorner,
  },
  data() {
    return {
      show: true,
      nodeEnv: false,
      fullYear: new Date().getFullYear(),
      copyright,
    };
  },
  computed: {
    ...mapGetters({
      cachedRoutes: "tagsBar/cachedRoutes",
      device: "settings/device",
    }),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        if (this.$store.state.tagsBar.skeleton) {
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, 200);
        } else {
          this.show = false;
        }
        if ("mobile" === this.device) {
          this.$store.dispatch("settings/foldSideBar");
        }
      });
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 200);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-main-container {
  position: relative;
  width: 100%;
  overflow: hidden;

  .footer-copyright {
    min-height: 70px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }
}
</style>
