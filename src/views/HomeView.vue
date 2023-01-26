<template>
  <div id="HomeView">
    <template>
      <div id="PAMH">
        <el-descriptions title="国家教育资源公共服务平台">
          <el-descriptions-item label="1">
            <div>
            <span>
              网址：https://so.eduyun.cn/synResource 资源：教案、课件、公开课视频
            </span>
              <el-divider></el-divider>
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="教学进阶视频类平台">
          <el-descriptions-item label="2">
            <div>
            <span>
            中国教师研修网 网址:http://www.teacherclub.com.cn/ 特点:研讨会直播、课例、名师讲座
            </span>
              <el-divider></el-divider>
              <span>
          国家中小学网络云平台 网址:https://ykt.eduyun.cn/ 特点:公立名校名师课程
          </span>
            </div>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </div>
</template>

<style scoped>
#HomeView {
  padding: 15px;
}

.table-expand {
  font-size: 0;
}

.table-expand label {
  width: 90px;
  color: #99a9bf;
}

.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {

    }
  }
}
</script>
