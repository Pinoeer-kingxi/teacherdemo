<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-container direction="horizontal">
          <el-image
            style="width: 60px; height: 60px"
            :src="require('@/assets/logo.png')"
            fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span>优秀教师成长平台</span>
        </el-container>
      </el-header>
      <el-container style="height: 94vh" direction="horizontal">
        <el-aside width="200px">
          <el-menu
            default-active="1"
            :default-openeds="['5']"
            @select="handleMenuSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">HOME</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-order"></i>
              <span slot="title">学习专区</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-s-opportunity"></i>
              <span slot="title">创新比赛探讨</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-marketing"></i>
              <span slot="title">青年教师培训</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-user"></i>
              <span slot="title">教师身心健康</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>
            Created By 炜希 © <router-link to="/about">关于</router-link>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
   -->
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

body {
  margin: 0px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-footer {
  background-color: #f7fbfd;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 25px;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script>
import router from '@/router'

export default {
  methods: {
    handleMenuSelect(key) {
      switch (key) {
        case '1':
          router.push({
            name: 'HomeView'
          })
          break
        case '2':
          router.push({
            name: 'NewsView'
          })
          break
        case '3':
          router.push({
            name: 'DiscussionView'
          })
          break
        case '4':
          router.push({
            name: 'SearchView'
          })
          break
        case '5':
          router.push({
            name: 'PAMH'
          })
          break
        default:
          break
      }
    }
  }
}
</script>
