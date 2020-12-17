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
        path: "online-store",
        name: "OnlineStore",
        component: EmptyLayout,
        meta: { title: "网络商品库" },
        children: [
          {
            path: "local-platform-online-store",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/local-platform-online-store"
              ),
            meta: { title: "本地平台商品库" },
            disable: true,
          },
          {
            path: "store",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/local-platform-online-store"
              ),
            meta: { title: "异地平台商品库" },
            disable: true,
          },
          {
            path: "product-content-information",
            component: () =>
              import(
                "@/views/baseInfo/networkCarrier/product-content-information"
              ),
            meta: { title: "商品内容信息管理" },
          },
        ],
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: EmptyLayout,
        meta: { title: "商品评价信息管理" },
        children: [
          {
            path: "commodity-evaluation",
            component: () =>
              import("@/views/baseInfo/networkCarrier/commodity-evaluation"),
            meta: { title: "商品评价信息管理" },
          },
        ],
      },
    ],
  },
  {
    path: "/businessApp",
    component: Layout,
    redirect: "noRedirect",
    name: "Vab",
    alwaysShow: true,
    meta: { title: "业务应用", icon: "cloud" },
    children: [
      {
        path: "administration",
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
        path: "case",
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
        path: "consumer-rights",
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
        path: "illumination",
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
        path: "knowledge",
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
        path: "electronic",
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
        path: "forensics",
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
        path: "supervision",
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
        path: "network",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "网络监测",
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
            meta: { title: "监测机构管理" },
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
    path: "/analysis",
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
        path: "userManagement",
        name: "UserManagement",
        component: EmptyLayout,
        meta: { title: "分析统计" },
        children: [
          {
            path: "network-carrier-analysis",
            component: () =>
              import("@/views/analysis/analysis/network-carrier-analysis"),
            meta: { title: "网络载体分析" },
            children: [
              {
                path: "administration",
                component: () => import("@/views/businessApp/administration"),
                meta: { title: "一般行政指导" },
                disable: true,
              },
            ],
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/vab/icon/remixIcon"),
            meta: { title: "涉网企业信息分析" },
            disable: true,
          },
          {
            path: "network-related-enterprises",
            component: () =>
              import("@/views/analysis/analysis/network-related-enterprises"),
            meta: { title: "企业注册信息分析" },
            disable: true,
          },
          {
            path: "annual-reports",
            component: () => import("@/views/analysis/analysis/annual-reports"),
            meta: { title: "企业年报信息分析" },
            disable: true,
          },
          {
            path: "enterprise-registration",
            component: () =>
              import("@/views/analysis/analysis/enterprise-registration"),
            meta: { title: "企业注册资本分析" },
            disable: true,
          },
        ],
      },
      {
        path: "userManagement",
        name: "UserManagement",
        component: EmptyLayout,
        meta: { title: "统计报表" },
        children: [
          {
            path: "register",
            name: "Register",
            component: () => import("@/views/analysis/report/custom-report"),
            meta: { title: "自定义报表" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/analysis/report/custom-report"),
            meta: { title: "可视化报表" },
            disable: true,
          },
        ],
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
        path: "network-carrier-assessment",
        name: "business-application-assessment",
        meta: { title: "网络载体考核" },
        component: EmptyLayout,
        children: [
          {
            path: "register",
            name: "Register",
            component: () =>
              import("@/views/businessAssessment/network-carrier-assessment"),
            meta: { title: "网络载体考核" },
          },
        ],
      },
      {
        path: "business-application-assessment",
        name: "Business-application-assessment",
        component: EmptyLayout,
        meta: { title: "业务应用考核" },
        children: [
          {
            path: "register",
            name: "Register",
            component: () =>
              import(
                "@/views/businessAssessment/business-application-assessment"
              ),
            meta: { title: "业务应用考核" },
          },
        ],
      },
      {
        path: "countryside",
        component: EmptyLayout,
        meta: { title: "农村电商报表" },
        children: [
          {
            path: "countryside",
            component: () => import("@/views/analysis/report/countryside"),
            meta: { title: "农村电商报表" },
          },
        ],
      },
      {
        path: "system-application",
        component: EmptyLayout,
        meta: { title: "系统应用考核" },
        children: [
          {
            path: "system-application",
            component: () =>
              import("@/views/analysis/report/system-application"),
            meta: { title: "系统使用考核" },
          },
        ],
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
        path: "credit",
        component: EmptyLayout,
        meta: { title: "信用评价" },
        children: [
          {
            path: "register",
            name: "Register",
            component: () => import("@/views/credit-construction/credit"),
            meta: { title: "信用评价" },
          },
        ],
      },
      {
        path: "clist-of-anomalies",
        component: EmptyLayout,
        meta: { title: "异常名录" },
        children: [
          {
            path: "list-of-anomalies",
            name: "list-of-anomalies",
            component: () =>
              import("@/views/credit-construction/list-of-anomalies"),
            meta: { title: "异常名录" },
          },
        ],
      },
      {
        path: "dishonest-enterprise",
        component: EmptyLayout,
        meta: { title: "失信企业" },
        children: [
          {
            path: "dishonest-enterprise",
            component: () =>
              import("@/views/credit-construction/dishonest-enterprise"),
            meta: { title: "失信企业" },
          },
        ],
      },
      {
        path: "administrative-sanction",
        component: EmptyLayout,
        meta: { title: "行政处罚" },
        children: [
          {
            path: "administrative-sanction",
            component: () =>
              import("@/views/credit-construction/administrative-sanction"),
            meta: { title: "行政处罚" },
          },
        ],
      },
      {
        path: "administrative-licensing",
        component: EmptyLayout,
        meta: { title: "行政许可" },
        children: [
          {
            path: "administrative-licensing",
            component: () =>
              import("@/views/credit-construction/administrative-licensing"),
            meta: { title: "行政许可" },
          },
        ],
      },
      {
        path: "scoring-index",
        component: EmptyLayout,
        meta: { title: "评分指标" },
        children: [
          {
            path: "scoring-index",
            component: () =>
              import("@/views/credit-construction/scoring-index"),
            meta: { title: "评分指标" },
          },
        ],
      },
    ],
  },
  {
    path: "/data-analysis",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "数据分析", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "commodity-analysis",
        component: EmptyLayout,
        meta: { title: "商品分析" },
        children: [
          {
            path: "scoring-index",
            component: () =>
              import(
                "@/views/data-analysis/commodity-analysis/product-reviews"
              ),
            meta: { title: "商品评论分析" },
          },
          {
            path: "product-price",
            component: () =>
              import("@/views/data-analysis/commodity-analysis/product-price"),
            meta: { title: "商品价格分析" },
          },
        ],
      },
      {
        path: "commodity-analysis",
        component: EmptyLayout,
        meta: { title: "网络载体分析" },
        children: [
          {
            path: "yellow-and-drug-related",
            component: () =>
              import(
                "@/views/data-analysis/network-carrier/yellow-and-drug-related"
              ),
            meta: { title: "涉黄和涉毒分析" },
          },
          {
            path: "false-propaganda",
            component: () =>
              import("@/views/data-analysis/network-carrier/false-propaganda"),
            meta: { title: "虚假宣传分析" },
          },
        ],
      },
      {
        path: "picture-and-text",
        component: EmptyLayout,
        meta: { title: "图片与文本分析" },
        children: [
          {
            path: "web-content-analysis",
            component: () =>
              import(
                "@/views/data-analysis/picture-and-text/web-content-analysis"
              ),
            meta: { title: "网页内容分析" },
          },
          {
            path: "Intelligent-extraction",
            component: () =>
              import(
                "@/views/data-analysis/picture-and-text/Intelligent-extraction"
              ),
            meta: { title: "图片文字智能提取" },
          },
        ],
      },
      {
        path: "catering-theme",
        component: EmptyLayout,
        meta: { title: "餐饮主题分析" },
        children: [
          {
            path: "catering-theme",
            component: () =>
              import("@/views/data-analysis/picture-and-text/catering-theme"),
            meta: { title: "餐饮主题分析" },
          },
        ],
      },
      {
        path: "annual-report-information",
        component: EmptyLayout,
        meta: { title: "年报信息分析" },
        children: [
          {
            path: "annual-report-information",
            component: () =>
              import(
                "@/views/data-analysis/picture-and-text/annual-report-information"
              ),
            meta: { title: "年报信息分析" },
          },
        ],
      },
      {
        path: "corporate-portrait",
        component: EmptyLayout,
        meta: { title: "企业画像分析" },
        children: [
          {
            path: "corporate-portrait",
            component: () => import("@/views/data-analysis/corporate-portrait"),
            meta: { title: "企业画像分析" },
            disable: true,
          },
          {
            path: "website-carrier-portrait",
            component: () =>
              import(
                "@/views/data-analysis/corporate-portrait/website-carrier-portrait"
              ),
            meta: { title: "网站载体画像分析" },
          },
          {
            path: "online-product-image",
            component: () =>
              import(
                "@/views/data-analysis/corporate-portrait/online-product-image"
              ),
            meta: { title: "网络商品图像分析" },
          },
        ],
      },
      {
        path: "e-commerce-research",
        component: EmptyLayout,
        meta: { title: "电商调研分析" },
        disable: true,
        children: [
          {
            path: "e-commerce-research",
            component: () =>
              import(
                "@/views/data-analysis/corporate-portrait/e-commerce-research"
              ),
            meta: { title: "电商调研分析" },
          },
        ],
      },
    ],
  },
  {
    path: "/risk-prediction",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "风险预测", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "risk-prediction",
        name: "risk-prediction",
        component: EmptyLayout,
        meta: { title: "风险预警" },
        children: [
          {
            path: "risk-warning",
            component: () => import("@/views/risk-prediction/risk-warning"),
            meta: { title: "风险预警" },
          },
        ],
      },
      {
        path: "risk-analysis",
        component: EmptyLayout,
        meta: { title: "风险分析" },
        children: [
          {
            path: "risk-analysis",
            component: () => import("@/views/risk-prediction/risk-analysis"),
            meta: { title: "风险分析" },
          },
        ],
      },
      {
        path: "userManagement",
        name: "UserManagement",
        component: EmptyLayout,
        meta: { title: "网络载体" },
        disable: true,
        children: [
          {
            path: "e-commerce-research",
            component: () =>
              import(
                "@/views/data-analysis/corporate-portrait/e-commerce-research"
              ),
            meta: { title: "网络载体" },
          },
        ],
      },
      {
        path: "userManagement",
        name: "UserManagement",
        component: EmptyLayout,
        meta: { title: "餐饮平台" },
        disable: true,
        children: [
          {
            path: "e-commerce-research",
            component: () =>
              import(
                "@/views/data-analysis/corporate-portrait/e-commerce-research"
              ),
            meta: { title: "餐饮平台" },
          },
        ],
      },
      {
        path: "key-monitoring",
        component: EmptyLayout,
        meta: { title: "重点监控" },
        children: [
          {
            path: "key-monitoring",
            component: () => import("@/views/risk-prediction/key-monitoring"),
            meta: { title: "重点监控" },
          },
        ],
      },
    ],
  },
  {
    path: "/market-monitoring",
    component: Layout,
    redirect: "noRedirect",
    name: "baseInfo",
    meta: { title: "市场监测", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "network-monitoring",
        name: "risk-prediction",
        component: EmptyLayout,
        meta: { title: "网络监测" },
        children: [
          {
            path: "network-monitoring",
            component: () =>
              import("@/views/market-monitoring/network-monitoring"),
            meta: { title: "网络监测" },
          },
          {
            path: "directional-monitoring",
            component: () =>
              import(
                "@/views/market-monitoring/network-monitoring/directional-monitoring"
              ),
            meta: { title: "定向监测" },
          },
          {
            path: "special-action",
            component: () =>
              import(
                "@/views/market-monitoring/network-monitoring/special-action"
              ),
            meta: { title: "专项行动" },
          },
        ],
      },
      {
        path: "network-check",
        component: EmptyLayout,
        meta: { title: "网络检查" },
        disable: true,
        children: [
          {
            path: "network-check",
            component: () => import("@/views/market-monitoring/network-check"),
            meta: { title: "网络检查" },
          },
        ],
      },
      {
        path: "key-word-bank",
        component: EmptyLayout,
        meta: { title: "关键词库" },
        children: [
          {
            path: "key-word-bank",
            component: () => import("@/views/market-monitoring/key-word-bank"),
            meta: { title: "关键词库" },
          },
          {
            path: "yellow-and-poison",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/yellow-and-poison"
              ),
            meta: { title: "涉黄涉毒" },
            disable: true,
          },
          {
            path: "suspected-of-counterfeiting",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/suspected-of-counterfeiting"
              ),
            meta: { title: "涉嫌假冒" },
            disable: true,
          },
          {
            path: "yangtze-river-ban",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/yangtze-river-ban"
              ),
            meta: { title: "长江禁售" },
            disable: true,
          },
          {
            path: "internet-ban",
            component: () =>
              import("@/views/market-monitoring/key-word-bank/internet-ban"),
            meta: { title: "互联网禁售" },
            disable: true,
          },
          {
            path: "absolute-language",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/absolute-language"
              ),
            meta: { title: "绝对化用语" },
            disable: true,
          },
          {
            path: "false-propaganda",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/false-propaganda"
              ),
            meta: { title: "虚假宣传" },
            disable: true,
          },
          {
            path: "contract-thesaurus",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/contract-thesaurus"
              ),
            meta: { title: "合同词库" },
            disable: true,
          },
          {
            path: "personal-thesaurus",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/personal-thesaurus"
              ),
            meta: { title: "个人词库" },
            disable: true,
          },
          {
            path: "common-thesaurus",
            component: () =>
              import(
                "@/views/market-monitoring/key-word-bank/common-thesaurus"
              ),
            meta: { title: "公用词库" },
            disable: true,
          },
        ],
      },
      {
        path: "market-public-opinion",
        component: EmptyLayout,
        meta: { title: "市场舆情" },
        children: [
          {
            path: "real-time-public-opinion",
            component: () =>
              import(
                "@/views/market-monitoring/market-public-opinion/real-time-public-opinion"
              ),
            meta: { title: "实时舆情" },
          },
          {
            path: "theme-customization",
            component: () =>
              import(
                "@/views/market-monitoring/market-public-opinion/theme-customization"
              ),
            meta: { title: "主题定制" },
          },
          {
            path: "event-analysis",
            component: () =>
              import(
                "@/views/market-monitoring/market-public-opinion/event-analysis"
              ),
            meta: { title: "事件分析" },
          },
          {
            path: "public-opinion-report",
            component: () =>
              import(
                "@/views/market-monitoring/market-public-opinion/public-opinion-report"
              ),
            meta: { title: "舆情报表" },
          },
        ],
      },
      {
        path: "special-search",
        component: EmptyLayout,
        meta: { title: "专项搜索" },
        children: [
          {
            path: "product-search",
            component: () =>
              import("@/views/market-monitoring/special-search/product-search"),
            meta: { title: "商品搜索" },
            disable: true,
          },
          {
            path: "content-search",
            component: () =>
              import("@/views/market-monitoring/special-search/content-search"),
            meta: { title: "内容搜索" },
            disable: true,
          },
          {
            path: "trademark-search",
            component: () =>
              import(
                "@/views/market-monitoring/special-search/trademark-search"
              ),
            meta: { title: "商标搜索" },
          },
          {
            path: "product-image-search",
            component: () =>
              import(
                "@/views/market-monitoring/special-search/product-image-search"
              ),
            meta: { title: "商品图片搜索" },
          },
          {
            path: "one-click-search",
            component: () =>
              import(
                "@/views/market-monitoring/special-search/one-click-search"
              ),
            meta: { title: "网监一键搜" },
          },
        ],
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
