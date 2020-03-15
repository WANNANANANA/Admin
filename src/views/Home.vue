<template>
  <!-- layout布局 -->
  <!-- el-col一行分为24列 span表示所占的份数 -->
  <el-row class="home">
    <!-- 顶部导航条 -->
    <el-col :span="24" class="header">
      <!-- 标题 -->
      <el-col :span="5" class="logo">
        <img :src="logo" />
        <!-- <span>ERP管理系统</span> -->
        <span>{{ one }}-{{ two }}</span>
      </el-col>
      <!-- 展开/折叠点击图标 -->
      <el-col :span="1" class="flow-icon" @click.native="collapse">
        <i class="el-icon-menu"></i>
      </el-col>
      <!-- 顶部菜单项 -->
      <el-col :span="14" class="menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#4b5f6e"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            background-color="#4b5f6e"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="horizontal"
            @select="handleSelectHearNavBar"
          > -->
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">消息中心</el-menu-item>
          <el-submenu index="3">
            <template slot="title">订单管理</template>
            <el-menu-item index="3-1">未完成订单</el-menu-item>
            <el-menu-item index="3-2">已完成订单</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 用户中心 -->
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link">{{ $i18n.locale }}</span>
          <!-- 下拉菜单列表 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changelanguage('中文')"
              >中文</el-dropdown-item
            >
            <el-dropdown-item @click.native="changelanguage('English')"
              >English</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown trigger="hover">
          <span class="el-dropdown-link">
            <img :src="userAvatar" />
            {{ username }}
          </span>
          <!-- 下拉菜单列表 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <!-- 主要内容区域-->
    <el-col :span="24" class="main">
      <!-- 侧边栏 垂直菜单 -->
      <aside class="aside">
        <el-menu
          default-active="1-3"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :collapse-transition="false"
          popper-class="hover"
        >
          <!-- <el-menu
          default-active="1-3"
          class="el-menu-vertical-demo"
          @open="handleopen"
          @close="handleclose"
          @select="handleselect"  
          :collapse="isCollapse"
        > -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ $t("common.manage") }}</span>
            </template>
            <el-menu-item index="1-1" @click="$router.push('user')">{{
              $t("sys.userMng")
            }}</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('menu')">{{
              $t("sys.menuMng")
            }}</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('news')">{{
              $t("sys.newsMng")
            }}</el-menu-item>
            <el-menu-item index="1-4" @click="$router.push('log')">{{
              $t("sys.logMng")
            }}</el-menu-item>
            <el-menu-item index="1-5" @click="$router.push('role')">{{
              $t("sys.roleMng")
            }}</el-menu-item>
            <!-- <el-menu-item index="1-1" @click="$router.push('user')">用户管理</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('menu')">菜单管理</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('news')">消息管理</el-menu-item> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>系统监控</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">分组二</template>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <!-- 右侧内容区域 -->
      <section class="content-container">
        <el-col :span="24" class="navigator">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in routeMatched" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24">
          <router-view />
        </el-col>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import logo from "@/assets/img/logo.png"
import { mapState } from 'vuex'

export default {
  name: "home",
  mounted() {
    // 用户信息初始化
    let user = sessionStorage.getItem("user");
    this.username = user || "游客";
    this.userAvatar = require("@/assets/img/user.jpg");
  },
  data() {
    return {
      isCollapse: false, // true表示折叠
      logo: logo, // 系统logo
      activeIndex: "2", // 当前激活的菜单项
      username: "", // 用户昵称
      userAvatar: "" // 用户头像
    };
  },
  computed: {
    ...mapState({
      one: 'one',
      two: 'two'
    }),
    routeMatched() {
      // console.log(this.$route);
      return this.$route.matched;
    }
  },
  methods: {
    click() {
      console.log(this.$store);
    },
    // 折叠导航栏
    collapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 切换语言
    changelanguage(language) {
      this.$i18n.locale = language;
    },
    // 退出登录
    logout() {
      this.$confirm("确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {
          console.log("取消退出");
        });
    }
  }
};
</script>

<style lang="less">
@import "../assets/style/basis.less";
.home {
  .boxSet();
  .header {
    position: absolute;
    z-index: 88;
    display: flex;
    background-color: @blueBg;
    .el-col {
      height: 60px;
    }
    .logo {
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;
      img {
        .boxSet(40px, 40px);
      }
      span {
        .font(18px);
        letter-spacing: 1px;
        font-weight: bold;
        color: @white;
      }
    }
    .flow-icon {
      .el-icon-menu {
        .font(20px);
        line-height: 60px;
        .boxSet();
      }
    }
    .userinfo {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .el-dropdown {
        &:nth-of-type(1) {
          width: 60px;
        }
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          .font(16px);
          color: @white;
          img {
            .boxSet(40px, 40px);
            margin-right: 20px;
            border-radius: 12px;
            overflow: hidden;
          }
        }
      }
    }
  }
  .main {
    display: flex;
    padding-top: 60px;
    min-height: 100%;
    aside {
      border-right: solid 1px #e6e6e6;
      .el-menu-vertical-demo {
        border: none;
        .el-menu-item-group__title {
          padding: 7px 0px !important;
          .font(14px);
        }
      }
    }
    section {
      flex: 1;
      .navigator {
        .el-breadcrumb {
          padding: 10px 0px 10px 10px;
          border-bottom: 1px solid #e6e6e6;
        }
      }
    }
  }
}
.el-tooltip__popper.is-dark {
  span {
    color: @white;
  }
}
.router-link-active {
  color: #409eff !important;
}
</style>
