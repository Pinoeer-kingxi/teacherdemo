<template>
  <div id="HomeView">
    <template>
      <div id="building">
        <div class="box">
          <a href="http://news.snnu.edu.cn/" target="_blank">模范先锋榜样力量</a>
        </div>
        <div class="box">
          <a href="http://edu.people.com.cn/" target="_blank">政策热点交流</a>
        </div>
        <div class="box">
          <a href="https://www.cnki.net/" target="_blank">知识学术前沿</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
#HomeView{
  padding: 15px;
}
#building{
  background:url("@/assets/background2.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}

.box{
  width: 33.3%;
}

</style>