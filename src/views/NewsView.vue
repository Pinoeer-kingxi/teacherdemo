<!--<template>-->
<!--  <div id="NewsView">-->
<!--    <template>-->
<!--      <div id="building">-->
<!--        <div id="PAMH">-->
<!--        <el-descriptions title="国家教育资源公共服务平台">-->
<!--          <el-descriptions-item label="1">-->
<!--            <div>-->
<!--            <span>-->
<!--              网址：<a href="https://so.eduyun.cn/synResource" target="_blank">https://so.eduyun.cn/synResource</a> 资源：教案、课件、公开课视频-->
<!--            </span>-->
<!--              <el-divider></el-divider>-->
<!--            </div>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->
<!--        <el-descriptions title="教学进阶视频类平台">-->
<!--          <el-descriptions-item label="2">-->
<!--            <div>-->
<!--            <span>-->
<!--            中国教师研修网 网址:<a href="http://www.teacherclub.com.cn/" target="_blank">http://www.teacherclub.com.cn/</a> 特点:研讨会直播、课例、名师讲座-->
<!--            </span>-->
<!--              <el-divider></el-divider>-->
<!--              <span>-->
<!--          国家中小学网络云平台 网址:<a href="https://ykt.eduyun.cn/" target="_blank">https://ykt.eduyun.cn/</a> 特点:公立名校名师课程-->
<!--          </span>-->
<!--            </div>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--#NewsView {-->
<!--  padding: 15px;-->
<!--}-->

<!--#building{-->
<!--background:url("@/assets/background1.jpg");-->
<!--  width: 100%;-->
<!--  height: 80%;-->
<!--  position: fixed;-->
<!--  background-size: 100% 100%;-->

<!--}-->

<!--.table-expand {-->
<!--  font-size: 0;-->
<!--}-->

<!--.table-expand label {-->
<!--  width: 90px;-->
<!--  color: #99a9bf;-->
<!--}-->

<!--.table-expand .el-form-item {-->
<!--  margin-right: 0;-->
<!--  margin-bottom: 0;-->
<!--  width: 50%;-->
<!--}-->
<!--</style>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'NewsView',-->
<!--  data() {-->
<!--    return {-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--以上为之前的页面-->
<template>
  <div id="NewsView">
    <div id="building">
      <div id="PAMH">
        <el-descriptions title="三笔字学习视频">
          <el-descriptions-item>
            <div class="image-grid">
              <img src="@/assets/image1.jpg" alt="学习视频1" :style="getImageStyle()">
              <img src="@/assets/image2.jpg" alt="学习视频2" :style="getImageStyle()">
              <img src="@/assets/image3.jpg" alt="学习视频3" :style="getImageStyle()">
              <img src="@/assets/image4.jpg" alt="学习视频4" :style="getImageStyle()">
              <img src="@/assets/image5.jpg" alt="学习视频5" :style="getImageStyle()">
              <img src="@/assets/image6.jpg" alt="学习视频6" :style="getImageStyle()">
              <img src="@/assets/image7.jpg" alt="学习视频7" :style="getImageStyle()">
              <img src="@/assets/image8.jpg" alt="学习视频8" :style="getImageStyle()">
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions title="优质图书资源">
          <el-descriptions-item >
            <div class="image2-grid">
              <img src="@/assets/book/B1.jpg" alt="图书资源1">
              <img src="@/assets/book/B2.jpg" alt="图书资源2">
              <img src="@/assets/book/B3.jpg" alt="图书资源3">
              <img src="@/assets/book/B4.jpg" alt="图书资源4">
              <img src="@/assets/book/B5.jpg" alt="图书资源5">
              <img src="@/assets/book/B6.jpg" alt="图书资源6">
              <img src="@/assets/book/B7.jpg" alt="图书资源7">
              <img src="@/assets/book/B8.jpg" alt="图书资源8">
              <img src="@/assets/book/B9.jpg" alt="图书资源9">
              <img src="@/assets/book/B10.jpg" alt="图书资源10">
              <img src="@/assets/book/B11.jpg" alt="图书资源11">
              <img src="@/assets/book/B12.jpg" alt="图书资源12">
              <img src="@/assets/book/B13.jpg" alt="图书资源13">
              <img src="@/assets/book/B14.jpg" alt="图书资源14">
              <img src="@/assets/book/B15.jpg" alt="图书资源15">
              <img src="@/assets/book/B16.jpg" alt="图书资源16">
              <img src="@/assets/book/B17.jpg" alt="图书资源17">
              <img src="@/assets/book/B18.jpg" alt="图书资源18">
              <img src="@/assets/book/B19.jpg" alt="图书资源19">
              <img src="@/assets/book/B20.jpg" alt="图书资源20">
              <img src="@/assets/book/B21.jpg" alt="图书资源21">
              <img src="@/assets/book/B22.jpg" alt="图书资源22">
              <img src="@/assets/book/B23.jpg" alt="图书资源23">
              <img src="@/assets/book/B24.jpg" alt="图书资源24">
              <img src="@/assets/book/B25.jpg" alt="图书资源25">
              <img src="@/assets/book/B26.jpg" alt="图书资源26">
              <img src="@/assets/book/B27.jpg" alt="图书资源27">
              <img src="@/assets/book/B28.jpg" alt="图书资源28">
              <img src="@/assets/book/B29.jpg" alt="图书资源29">
              <img src="@/assets/book/B30.jpg" alt="图书资源30">
              <img src="@/assets/book/B31.jpg" alt="图书资源31">
              <img src="@/assets/book/B32.jpg" alt="图书资源32">
              <img src="@/assets/book/B33.jpg" alt="图书资源33">
              <img src="@/assets/book/B34.jpg" alt="图书资源34">
              <img src="@/assets/book/B35.jpg" alt="图书资源35">
              <img src="@/assets/book/B36.jpg" alt="图书资源36">
              <img src="@/assets/book/B37.jpg" alt="图书资源37">
              <img src="@/assets/book/B38.jpg" alt="图书资源38">
              <img src="@/assets/book/B39.jpg" alt="图书资源39">
              <img src="@/assets/book/B40.jpg" alt="图书资源40">
              <img src="@/assets/book/B41.jpg" alt="图书资源41">
              <img src="@/assets/book/B42.jpg" alt="图书资源42">
              <img src="@/assets/book/B43.jpg" alt="图书资源43">
              <img src="@/assets/book/B44.jpg" alt="图书资源44">
              <img src="@/assets/book/B45.jpg" alt="图书资源45">
              <img src="@/assets/book/B46.jpg" alt="图书资源46">
              <img src="@/assets/book/B47.jpg" alt="图书资源47">
              <img src="@/assets/book/B48.jpg" alt="图书资源48">
              <img src="@/assets/book/B49.jpg" alt="图书资源49">
              <img src="@/assets/book/B50.jpg" alt="图书资源50">
            </div>
          </el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions title="优质写作视频">
          <el-descriptions-item>
            <div class="image-grid">
              <img src="@/assets/image13.jpg" alt="写作视频1">
              <img src="@/assets/image14.jpg" alt="写作视频2">
              <img src="@/assets/image15.jpg" alt="写作视频3">
              <img src="@/assets/image16.jpg" alt="写作视频4">
              <img src="@/assets/image17.jpg" alt="写作视频5">
              <img src="@/assets/image18.jpg" alt="写作视频6">
            </div>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>

<style scoped>
#NewsView {
  padding: 15px;
}

/*#building {*/
/*  background: url("@/assets/background1.jpg");*/
/*  width: 100%;*/
/*  height: 80%;*/
/*  position: fixed;*/
/*  background-size: 100% 100%;*/
/*}*/

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.image-grid img {
  width: 100%;
  height: auto;
}

.image2-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
}

.image2-grid img {
  width: 100%;
  height: auto;
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
    return {};
  },
  methods: {
    getImageStyle() {
      const width = window.innerWidth; // 获取浏览器窗口宽度
      const height = window.innerHeight; // 获取浏览器窗口高度

      // 根据浏览器窗口尺寸计算图片的适合大小
      const imageWidth = width * 0.2; // 设置图片宽度为浏览器宽度的30%
      const imageHeight = height * 0.3; // 设置图片高度为浏览器高度的20%

      return `width: ${imageWidth}px; height: ${imageHeight}px;`;
    },
  },
};

// export default {
//   name: 'NewsView',
//   data() {
//     return {};
//   },
// };
</script>
