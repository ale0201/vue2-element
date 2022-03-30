<template>
  <div class="layout-wrapper">
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <el-menu class="el-menu" @select="handleSelect">
          <template v-for="menu in menus">
            <el-submenu
              :index="menu.index"
              v-if="menu.children"
              :key="menu.index"
            >
              <template slot="title">{{ menu.name }}</template>
              <template v-for="smenu in menu.children">
                <el-submenu
                  :index="smenu.index"
                  v-if="smenu.children"
                  :key="smenu.index"
                >
                  <template slot="title">{{ smenu.name }}</template>
                  <el-menu-item
                    v-for="tmenu in smenu.children"
                    :key="tmenu.index"
                    :index="tmenu.index"
                  >
                    {{ tmenu.name }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item :index="smenu.index" v-else :key="smenu.index">
                  {{ smenu.name }}
                </el-menu-item>
              </template>
            </el-submenu>

            <el-menu-item :index="menu.index" v-else :key="menu.index">
              {{ menu.name }}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container class="layout-main">
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineMenus } from "../../router/defineMenu";
export default {
  data() {
    return {
      menus: defineMenus,
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index);
      this.$router.push({
        path: index,
        params: { data: "query" },
      });
    },
  },
  mounted() {
    console.log(">>>", this.menus);
  },
  created() {},
};
</script>
<style lang="scss" src="./index.scss"></style>
