<template>
    <div id="DiscussionView">
      <el-descriptions title="讲课比赛+演讲视频">
        <el-descriptions-item>
          <div class="index">
            <!-- 第一个轮播图 -->
            <div>
              <el-carousel :interval="4000" type="card" arrow="always" height="250px">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                  <img :src="item.idView" class="image">
                </el-carousel-item>
              </el-carousel>
            </div>

            <el-divider></el-divider>

            <!-- 第二个轮播图 -->
            <div class="carousel-container">
              <el-carousel :interval="3000" type="card" arrow="always" height="250px">
                <el-carousel-item v-for="item in imgList2" :key="item.id">
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
/*#DiscussionView {*/
/*  background: #fff;*/
/*  padding-top: 20px;*/
/*  padding-left: 10px;*/
/*  padding-bottom: 10px;*/
/*  height: 100%;*/
/*  background-color: #fff;*/
/*}*/

.index {
  background: #c8cfd8;
  width: 250px;
  text-align: center;
  margin-left: 140px;
  width: 80.6%;
}

.carousel-container {
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  width: 250px;
}

</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      imgList: [
        {id: 0, idView: require("@/assets/p1.png")},
        {id: 1, idView: require("@/assets/p2.png")},
        {id: 2, idView: require("@/assets/p3.png")},
        {id: 3, idView: require("@/assets/p4.png")}
      ],
      imgList2: [
        {id: 0, idView: require("@/assets/p5.png")},
        {id: 1, idView: require("@/assets/p6.png")},
        {id: 2, idView: require("@/assets/p7.png")},
        {id: 3, idView: require("@/assets/p8.png")}
      ]
    };
  }
};
</script>
