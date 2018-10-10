<template>
   <div>
       <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in arr" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发布时间：{{item.add_time | dateformat}}</span>
                            <span>点击次数：{{item.click}}</span>
                            <p>{{item.content}}></p>
                        </p>
                    </div>
                </router-link>
            </li>
		</ul>
    </div> 
</template>
<script>
     export default {
        data:function(){
            return {
                arr:[
                    {title:"奔驰",add_time:new Date(),id:1,img_url:"../../src/images/1.jpg",content:"开奔驰坐宝马，学校门前接文华,一个人容易喝醉，两个人容易迷路"},
                    {title:"宝马",add_time:new Date(),id:2,img_url:"../../src/images/2.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"大众",add_time:new Date(),id:3,img_url:"../../src/images/3.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"奔驰",add_time:new Date(),id:4,img_url:"../../src/images/1.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"大众",add_time:new Date(),id:5,img_url:"../../src/images/2.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"奥迪",add_time:new Date(),id:6,img_url:"../../src/images/3.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"凯迪拉克",add_time:new Date(),id:7,img_url:"../../src/images/1.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"奔驰",add_time:new Date(),id:8,img_url:"../../src/images/2.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                    {title:"奔驰",add_time:new Date(),id:9,img_url:"../../src/images/1.jpg",content:"开奔驰坐宝马，学校门前接文华"},
                  
                ]
            }
        },
        // created(){
        //     this.getNews()
        // },
        // methods:{
        //     getNews:function(){
        //         this.$http.get("movie/in_theaters/1").then(function(result){
        //             if(result.state===0){
        //                 this.arr=result.body.message
        //             }
        //         })
        //     }
        // }
    }
</script>
<style lang="scss" scoped>
.mui-table-view{
    h1{
        font-size: 12px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
}
    
</style>
