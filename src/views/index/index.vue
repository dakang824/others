<template>
  <div class="index-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never" class="card">
          <div slot="header">
            <span>授权数</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="sqs"
          />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>销售量/签单量</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="xsl"
          />
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>更新日志</span>
            <div style="float: right">部署时间:{{ updateTime }}</div>
          </div>
          <table class="table">
            <tr>
              <td>@vue/cli版本</td>
              <td>{{ devDependencies["@vue/cli-service"] }}</td>
            </tr>
            <tr>
              <td>vue版本</td>
              <td>{{ dependencies.vue }}</td>
            </tr>
            <tr>
              <td>vuex版本</td>
              <td>{{ dependencies.vuex }}</td>
            </tr>
            <tr>
              <td>vue-router版本</td>
              <td>{{ dependencies["vue-router"] }}</td>
            </tr>
            <tr>
              <td>element-ui版本</td>
              <td>{{ dependencies["element-ui"] }}</td>
            </tr>
            <tr>
              <td>axios版本</td>
              <td>{{ dependencies.axios }}</td>
            </tr>
          </table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabChart from "@/plugins/echarts";
// import VabCount from "@/plugins/vabCount";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";
import { getNoticeList } from "@/api/notice";
import { getRepos, getStargazers } from "@/api/github";
export default {
  name: "Index",
  components: {
    VabChart,
    // VabCount,
  },
  data() {
    return {
      updateTime: process.env.VUE_APP_UPDATE_TIME,
      nodeEnv: process.env.NODE_ENV,
      dependencies: dependencies,
      devDependencies: devDependencies,
      config1: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config2: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config3: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },

      //访问量
      fwl: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "访问量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22],
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      //授权数
      sqs: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            /*boundaryGap: false,*/
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "授权数",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 20, 33, 39, 33, 22],
          },
        ],
      },
      //词云
      cy: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 15,
            sizeRange: [12, 40],
            rotationRange: [0, 0],
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color() {
                  const arr = [
                    "#1890FF",
                    "#36CBCB",
                    "#4ECB73",
                    "#FBD437",
                    "#F2637B",
                    "#975FE5",
                  ];
                  let index = Math.floor(Math.random() * arr.length);
                  return arr[index];
                },
              },
            },
            data: [
              {
                name: "vue-admin-beautiful",
                value: 15000,
              },
              {
                name: "element",
                value: 10081,
              },
              {
                name: "beautiful",
                value: 9386,
              },

              {
                name: "vue",
                value: 6500,
              },
              {
                name: "chuzhixin",
                value: 6000,
              },
              {
                name: "good",
                value: 4500,
              },
              {
                name: "success",
                value: 3800,
              },
              {
                name: "never",
                value: 3000,
              },
              {
                name: "boy",
                value: 2500,
              },
              {
                name: "girl",
                value: 2300,
              },
              {
                name: "github",
                value: 2000,
              },
              {
                name: "hbuilder",
                value: 1900,
              },
              {
                name: "dcloud",
                value: 1800,
              },
              {
                name: "china",
                value: 1700,
              },
              {
                name: "1204505056",
                value: 1600,
              },
              {
                name: "972435319",
                value: 1500,
              },
              {
                name: "young",
                value: 1200,
              },
              {
                name: "old",
                value: 1100,
              },
              {
                name: "vuex",
                value: 900,
              },
              {
                name: "router",
                value: 800,
              },
              {
                name: "money",
                value: 700,
              },
              {
                name: "qingdao",
                value: 800,
              },
              {
                name: "yantai",
                value: 9000,
              },
              {
                name: "author is very cool",
                value: 9200,
              },
            ],
          },
        ],
      },
      //销售量
      xsl: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "销售量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22, 10, 22, 23, 13, 29],
            smooth: true,
            areaStyle: {},
          },
          {
            name: "签单量",
            type: "line",
            data: [20, 12, 30, 23, 31, 13, 32, 12, 12, 13, 13, 29],
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      //更新日志
      reverse: true,
      activities: [],
      noticeList: [],
      //其他信息
      userAgent: navigator.userAgent,
      //卡片图标
      iconList: [
        {
          icon: "video",
          title: "视频播放器",
          link: "/vab/player",
          color: "#ffc069",
        },
        {
          icon: "table",
          title: "表格",
          link: "/vab/table/comprehensiveTable",
          color: "#5cdbd3",
        },
        {
          icon: "laptop-code",
          title: "源码",
          link: "https://github.com/chuzhixin/vue-admin-beautiful",
          color: "#b37feb",
        },
        {
          icon: "book",
          title: "XXX",
          link: "",
          color: "#69c0ff",
        },
        {
          icon: "bullhorn",
          title: "XXX",
          link: "",
          color: "#ff85c0",
        },
        {
          icon: "gift",
          title: "XXX",
          link: "",
          color: "#ffd666",
        },

        {
          icon: "balance-scale-left",
          title: "公平的世界",
          link: "",
          color: "#ff9c6e",
        },
        {
          icon: "coffee",
          title: "休息一下",
          link: "",
          color: "#95de64",
        },
      ],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    handleClick(e) {
      this.$baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
    handleChangeTheme() {
      this.$baseEventBus.$emit("theme");
    },
    fetchData() {
      getList().then((res) => {
        res.data.map((item, index) => {
          if (index === res.data.length - 1) {
            item.color = "#0bbd87";
          }
        });
        this.activities = res.data;
      });
      getNoticeList().then((res) => {
        this.noticeList = res.data;
      });
      /* getRepos({
        token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
      }).then((res) => {
        const per_page = Math.ceil(res.data.stargazers_count / 100);
        alert(per_page);
        getStargazers({
          token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
          page: 1,
          per_page: res.per_page,
        }).then((res) => {
          alert(JSON.stringify(res));
        });
      }); */
    },
  },
};
</script>
<style lang="scss" scoped>
.index-container {
  ::v-deep {
    .el-card__body {
      .echarts {
        width: 100%;
        height: 240px;
      }
    }
  }

  .card {
    ::v-deep {
      .el-card__body {
        .echarts {
          width: 100%;
          height: 305px;
        }
      }
    }
  }

  .bottom {
    height: 40px;
    padding-top: 20px;
    margin-top: 5px;
    color: #595959;
    text-align: left;
    border-top: 1px solid $base-border-color;
  }

  .table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;

    td {
      position: relative;
      min-height: 20px;
      padding: 9px 15px;
      font-size: 14px;
      line-height: 20px;
      border: 1px solid #e6e6e6;

      &:first-child {
        width: 50%;
        text-align: right;
      }
    }
  }

  .icon-panel {
    text-align: center;
    cursor: pointer;

    svg {
      font-size: 40px;
    }

    p {
      margin-top: 20px;
    }
  }

  .bottom-btn {
    float: right;
    margin-top: 5px;

    button {
      margin: 5px 0 5px 10px;
    }
  }
}
</style>
