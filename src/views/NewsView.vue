<template>
  <div id="NewsView">
    <template>
      <div id="building">
        <div id="PAMH">
        <el-descriptions title="国家教育资源公共服务平台">
          <el-descriptions-item label="1">
            <div>
            <span>
              网址：<a href="https://so.eduyun.cn/synResource" target="_blank">https://so.eduyun.cn/synResource</a> 资源：教案、课件、公开课视频
            </span>
              <el-divider></el-divider>
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="教学进阶视频类平台">
          <el-descriptions-item label="2">
            <div>
            <span>
            中国教师研修网 网址:<a href="http://www.teacherclub.com.cn/" target="_blank">http://www.teacherclub.com.cn/</a> 特点:研讨会直播、课例、名师讲座
            </span>
              <el-divider></el-divider>
              <span>
          国家中小学网络云平台 网址:<a href="https://ykt.eduyun.cn/" target="_blank">https://ykt.eduyun.cn/</a> 特点:公立名校名师课程
          </span>
            </div>
          </el-descriptions-item>
        </el-descriptions>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
#NewsView {
  padding: 15px;
}

#building{
background:url("@/assets/background1.jpg");
  width: 100%;
  height: 80%;
  position: fixed;
  background-size: 100% 100%;

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
  name: 'NewsView',
  data() {
    return {

    }
  }
}
</script>
