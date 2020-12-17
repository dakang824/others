import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home",
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          affix: true,
        },
      },
    ],
  },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin"],
        },
      },
    ],
  }, */
  {
    path: "/baseInfo",
    component: Layout,
    redirect: "noRedirect",
    name: "BaseInfo",
    meta: { title: "基础信息库", icon: "users-cog" },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: EmptyLayout,
        meta: { title: "市场信息库" },
        children: [
          {
            path: "register",
            name: "Register",
            component: () => import("@/views/baseInfo/marketInfo/register"),
            meta: { title: "注册信息库" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/vab/icon/remixIcon"),
            meta: { title: "企业年报库" },
            disable: true,
          },
          {
            path: "restaurant",
            name: "Restaurant",
            component: () => import("@/views/baseInfo/marketInfo/restaurant"),
            meta: { title: "餐饮许可信息管理" },
          },
        ],
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: EmptyLayout,
        meta: { title: "网络载体库" },
        children: [
          {
            path: "local-platform-online-store",
            name: "LocalPlatformOnlineStore",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/local-platform-online-store"
              ),
            meta: { title: "本地平台网店库" },
          },
          {
            path: "remote-platform-online-store",
            name: "RemotePlatformOnlineStore",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/remote-platform-online-store"
              ),
            meta: { title: "异地平台网店库" },
          },
          {
            path: "websit",
            name: "Websit",
            component: () => import("@/views/baseInfo/networkCarrier/websit"),
            meta: { title: "网站库" },
          },
          {
            path: "mobile-data-management",
            name: "MobileDataManagement",
            component: () =>
              import("@/views/baseInfo/networkCarrier/mobile-data-management"),
            meta: { title: "移动端数据管理" },
          },
          {
            path: "online-restaurant-of-catering-platform",
            name: "OnlineRestaurantOfCateringPlatform",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/online-restaurant-of-catering-platform"
              ),
            meta: { title: "餐饮平台网店库" },
          },
          {
            path: "exclude-library",
            name: "ExcludeLibrary",
            component: () =>
              import("@/views/baseInfo/networkCarrier/exclude-library"),
            meta: { title: "排除库" },
          },
          {
            path: "shut-down-the-warehouse",
            name: "ShutDownTheWarehouse",
            component: () =>
              import("@/views/baseInfo/networkCarrier/shut-down-the-warehouse"),
            meta: { title: "关停库" },
          },
          {
            path: "claim-librar",
            name: "ClaimLibrar",
            component: () =>
              import("@/views/baseInfo/networkCarrier/claim-library"),
            meta: { title: "认领库" },
          },
          {
            path: "key-database",
            name: "KeyDatabase",
            component: () =>
              import("@/views/baseInfo/networkCarrier/key-database"),
            meta: { title: "重点库" },
          },
        ],
      },
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/baseInfo/userManagement/index"),
        meta: { title: "网络商品库" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () => import("@/views/baseInfo/roleManagement/index"),
        meta: { title: "商品评价信息管理" },
      },
    ],
  },
  {
    path: "/vab",
    component: Layout,
    redirect: "noRedirect",
    name: "Vab",
    alwaysShow: true,
    meta: { title: "业务应用", icon: "cloud" },
    children: [
      {
        path: "table",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Table",
        meta: {
          title: "行政指导",
          permissions: ["admin"],
        },
        children: [
          {
            path: "administration",
            name: "administration",
            component: () => import("@/views/businessApp/administration"),
            meta: { title: "一般行政指导" },
            disable: true,
          },
          {
            path: "administration-easy",
            name: "InlineEditTable",
            component: () => import("@/views/businessApp/administration"),
            meta: { title: "简易行政指导" },
            disable: true,
          },
          {
            path: "enterprise-training",
            name: "ComprehensiveTable",
            component: () => import("@/views/businessApp/administration"),
            meta: { title: "企业培训管理" },
            disable: true,
          },
          {
            path: "legal-provisions",
            name: "InlineEditTable",
            component: () => import("@/views/businessApp/administration"),
            meta: { title: "法律条文管理" },
            disable: true,
          },
          {
            path: "statistical-analysis",
            name: "InlineEditTable",
            component: () => import("@/views/businessApp/administration"),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "案件管理",
          permissions: ["admin"],
        },
        children: [
          {
            path: "general-case-management",
            name: "AwesomeIcon",
            component: () =>
              import(
                "@/views/businessApp/case-management/general-case-management"
              ),
            meta: { title: "一般案件管理" },
          },
          {
            path: "docking-case-management",
            name: "DockingCaseManagement",
            component: () =>
              import(
                "@/views/businessApp/case-management/docking-case-management"
              ),
            meta: { title: "对接案件管理" },
          },
          {
            path: "statistical-analysis",
            name: "ColorfulIcon",
            component: () =>
              import(
                "@/views/businessApp/case-management/statistical-analysis"
              ),
            meta: { title: "统计分析" },
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "消费维权",
          permissions: ["admin"],
        },
        children: [
          {
            path: "data1",
            name: "AwesomeIcon",
            component: () =>
              import("@/views/businessApp/consumer-rights/data1"),
            meta: { title: "12315数据管理" },
          },
          {
            path: "data2",
            name: "DockingCaseManagement",
            component: () =>
              import("@/views/businessApp/consumer-rights/data2"),
            meta: { title: "12345数据管理" },
          },
          {
            path: "websit",
            component: () =>
              import("@/views/businessApp/consumer-rights/data2"),
            meta: { title: "合肥市维权站点管理" },
            disable: true,
          },
          {
            path: "processing-flow",
            component: () =>
              import("@/views/businessApp/consumer-rights/processing-flow"),
            meta: { title: "处理流程" },
          },
          {
            path: "statistical-analysis",
            component: () =>
              import(
                "@/views/businessApp/consumer-rights/statistical-analysis"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
          {
            path: "information-registration",
            component: () =>
              import(
                "@/views/businessApp/consumer-rights/information-registration"
              ),
            meta: { title: "信息登记" },
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "亮照亮标",
        },
        children: [
          {
            path: "Illumination-state",
            name: "AwesomeIcon",
            component: () =>
              import(
                "@/views/businessApp/bright-light-beacon/Illumination-state"
              ),
            meta: { title: "亮照状态" },
            disable: true,
          },
          {
            path: "lighting-audit",
            name: "DockingCaseManagement",
            component: () =>
              import("@/views/businessApp/bright-light-beacon/lighting-audit"),
            meta: { title: "亮照审核" },
            disable: true,
          },
          {
            path: "account",
            component: () =>
              import(
                "@/views/businessApp/case-management/statistical-analysis"
              ),
            meta: { title: "账号管理" },
            disable: true,
          },
          {
            path: "statistical-analysis",
            component: () =>
              import(
                "@/views/businessApp/case-management/statistical-analysis"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "知识产权",
          permissions: ["admin"],
        },
        children: [
          {
            path: "synchronous-data-management",
            component: () =>
              import(
                "@/views/businessApp/knowledge/synchronous-data-management"
              ),
            meta: { title: "同步数据管理" },
            disable: true,
          },
          {
            path: "statistical-analysis",
            component: () =>
              import(
                "@/views/businessApp/knowledge/synchronous-data-management"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "电子合同",
          permissions: ["admin"],
        },
        children: [
          {
            path: "automatic-monitoring",
            component: () =>
              import(
                "@/views/businessApp/electronic-contract/automatic-monitoring"
              ),
            meta: { title: "自动化监测" },
            disable: true,
          },
          {
            path: "contract-cases",
            component: () =>
              import(
                "@/views/businessApp/knowledge/synchronous-data-management"
              ),
            meta: { title: "合同案件管理" },
            disable: true,
          },
          {
            path: "statistical-analysis1",
            component: () =>
              import(
                "@/views/businessApp/knowledge/synchronous-data-management"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "电子取证",
          permissions: ["admin"],
        },
        children: [
          {
            path: "existing-evidence",
            component: () =>
              import(
                "@/views/businessApp/electronic-forensics/existing-evidence"
              ),
            meta: { title: "存证管理" },
            disable: true,
          },
          {
            path: "Issue-of-certificatet",
            component: () =>
              import(
                "@/views/businessApp/electronic-forensics/Issue-of-certificatet"
              ),
            meta: { title: "出证管理" },
            disable: true,
          },
          {
            path: "state",
            component: () =>
              import("@/views/businessApp/electronic-forensics/state"),
            meta: { title: "状态查询" },
            disable: true,
          },
          {
            path: "statistical-analysis",
            component: () =>
              import(
                "@/views/businessApp/electronic-forensics/statistical-analysis"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "协调监管",
          permissions: ["admin"],
        },
        children: [
          {
            path: "send-for-assistance",
            component: () =>
              import(
                "@/views/businessApp/coordination-of-supervision/send-for-assistance"
              ),
            meta: { title: "发送协查" },
          },
          {
            path: "Issue-of-certificatet",
            component: () =>
              import(
                "@/views/businessApp/electronic-forensics/Issue-of-certificatet"
              ),
            meta: { title: "协查管理" },
            disable: true,
          },
          {
            path: "statistical-analysis",
            component: () =>
              import(
                "@/views/businessApp/electronic-forensics/statistical-analysis"
              ),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "网络抽检",
          permissions: ["admin"],
        },
        children: [
          {
            path: "commodity",
            component: () =>
              import("@/views/businessApp/network-sampling/commodity"),
            meta: { title: "商品抽检" },
            disable: true,
          },
          {
            path: "Issue-of-certificatet",
            component: () =>
              import("@/views/businessApp/network-sampling/commodity"),
            meta: { title: "合格商品" },
            disable: true,
          },
          {
            path: "Issue-of-certificatet",
            component: () =>
              import("@/views/businessApp/network-sampling/commodity"),
            meta: { title: "复检商品" },
            disable: true,
          },
          {
            path: "Issue-of-certificatet",
            component: () =>
              import("@/views/businessApp/network-sampling/commodity"),
            meta: { title: "不合格商品" },
            disable: true,
          },
          {
            path: "managemen-of-testing-organization",
            component: () =>
              import(
                "@/views/businessApp/network-sampling/managemen-of-testing-organization"
              ),
            meta: { title: "检测机构管理" },
          },
          {
            path: "statistical-analysis",
            component: () =>
              import("@/views/businessApp/network-sampling/commodity"),
            meta: { title: "统计分析" },
            disable: true,
          },
        ],
      },
    ],
  },
  {
    path: "/mall",
    component: Layout,
    redirect: "noRedirect",
    name: "Mall",
    meta: {
      title: "统计分析",
      icon: "shopping-cart",
      permissions: ["admin"],
    },

    children: [
      {
        path: "pay",
        name: "Pay",
        component: () => import("@/views/mall/pay/index"),
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: () => import("@/views/mall/goodsList/index"),
        meta: {
          title: "商品列表",
        },
      },
      {
        path: "goodsDetail",
        name: "GoodsDetail",
        component: () => import("@/views/mall/goodsDetail/index"),
        meta: {
          title: "商品详情",
        },
      },
    ],
  },

  {
    path: "/error",
    component: Layout,
    redirect: "noRedirect",
    name: "Error",
    hidden: true,
    meta: { title: "业务考核", icon: "bug" },
    children: [
      {
        path: "business-application-assessment",
        name: "business-application-assessment",
        meta: { title: "网络载体考核" },
        component: () =>
          import("@/views/businessAssessment/network-carrier-assessment"),
        disable: true,
      },
      {
        path: "business-application-assessment",
        name: "Business-application-assessment",
        component: () =>
          import("@/views/businessAssessment/business-application-assessment"),
        meta: { title: "业务应用考核" },
        disable: true,
      },
      {
        path: "business-application-assessment",
        name: "Business-application-assessment",
        component: () =>
          import("@/views/businessAssessment/business-application-assessment"),
        meta: { title: "农村电商报表" },
        disable: true,
      },
      {
        path: "business-application-assessment",
        name: "Business-application-assessment",
        component: () =>
          import("@/views/businessAssessment/business-application-assessment"),
        meta: { title: "系统使用考核" },
        disable: true,
      },
    ],
  },
  {
    path: "/baseInfo",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "信用建设", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/baseInfo/userManagement/index"),
        meta: { title: "用户管理" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () => import("@/views/baseInfo/roleManagement/index"),
        meta: { title: "角色管理" },
      },
    ],
  },
  {
    path: "/baseInfo",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "数据分析", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/baseInfo/userManagement/index"),
        meta: { title: "用户管理" },
      },
    ],
  },
  {
    path: "/baseInfo",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "风险预测", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/baseInfo/userManagement/index"),
        meta: { title: "用户管理" },
      },
    ],
  },
  {
    path: "/baseInfo",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "市场监测", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/baseInfo/userManagement/index"),
        meta: { title: "用户管理" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export function resetRouter() {
  router.matcher = new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
