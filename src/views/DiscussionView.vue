<template>
  <div id="DiscussionView">
    <el-descriptions title="议题讨论专区">
      <el-descriptions-item>
        <div class="index">
          <!-- 跑马灯  -->
          <div>
            <el-carousel :interval="4000" type="card" arrow="always" height="250px" >
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" class="image">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
#DiscussionView {
  background: #fff;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.index{
  background: #c8cfd8;
  width: 250px;
  text-align: center;
  margin-left: 140px;
  width: 80.6%;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  width: 250px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>

<script>

export default {
  name1: 'DiscussionView',
  name2: 'index',
  data() {
    return {
      imgList: [
        {id:0,idView:require("@/assets/p1.png")},
        {id:1,idView:require("@/assets/p2.png")},
        {id:2,idView:require("@/assets/p3.png"),},
        {id:3,idView:require("@/assets/p4.png")}
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
