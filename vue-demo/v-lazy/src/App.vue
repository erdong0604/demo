<template>
  <div id="app">
    <img v-for="(item,index) in imageItems" 
        v-lazy="item"
        :key="index" />
  </div>
</template>

<script>

export default {
    data(){
        return{
            imageItems:[
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
                "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfynwi1sejj30ij0nrdx0.jpg",
            ]
        }
    },
    directives:{
        
    }
}
</script>

<style>
img{
    width: 100%;
    height: 400px;
}
</style>
