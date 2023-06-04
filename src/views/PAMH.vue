<template>
  <div id="building">
  <div id="PAMH">
    <template>
    <el-descriptions title="青年教师助力培训指南">
      <el-descriptions-item >
        <div>
          <el-button :plain="true" @click="open">注意保护眼睛，合理安排时间</el-button>
          <el-divider></el-divider>
            <span>1、换位思考认同法——正确认知压力，灵活调整自己的心态
例如，当你遇到认为不公平的生活事件或不协调的人际关系以及不愉快的情感体验时能换位思考。
            </span>
          <el-divider></el-divider>
          <span>
            2、推移时间遗忘法——有时时间是解决问题的最好方法
积极忘记过去的、眼前的不愉快，随时修正自己的认知观念。不要让痛苦的过去牵制住你的未来。
            <el-divider></el-divider>
          </span>
        </div>
      </el-descriptions-item>
    </el-descriptions>
        <br>
      <el-descriptions title="心理健康专题培训">
        <el-descriptions-item >
          <div>
            <br>
            <ul>
              <li><a href=" https://www.bilibili.com/video/BV1Qf4y1H7kq/" class="left" target="_blank">【教师保护嗓子三步走，预防教师职业病】</a>
              </li>
              <br>
              <li><a href=" https://www.bilibili.com/video/BV1Ag411v7Lb/" class="left" target="_blank">【实用经验｜如何才能真发火，但是不真生气？（95后教师的发火艺术）】</a>
              </li>
              <br>
              <li><a href=" https://www.bilibili.com/video/BV1dV4y1576U/" class="left" target="_blank">【做老师，真的不用这么累…】</a>
              </li>
            </ul>
          </div>
        </el-descriptions-item>
      </el-descriptions>
    </template>
  </div>
</div>
</template>

<style scoped>
#building{
  background:url("@/assets/background5.jpg");
  width: 100%;
  height: 80%;
  position: fixed;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<script>
export default {
  name: 'PAMH',
  methods: {
    open() {
      this.$message('请别忘了让眼睛放松');
    }
  }

}
</script>


