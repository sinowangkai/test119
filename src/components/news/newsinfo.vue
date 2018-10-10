<template>
    <div class="newsinfo-container">
        <h1 class="title">今年的冬天特别的冷</h1>
        <p class="subtitle">
            <span>上传时间:2017年11月</span>
            <span>点击次数：5</span>
        </p>
        <hr>
        <div class="content">
                这是文章的内容，请写满 谢谢合作
            这是文章的内容，请写满 谢谢合作
            这是文章的内容，请写满 谢谢合作
            这是文章的内容，请写满 谢谢合作
            这是文章的内容，请写满 谢谢合作
        </div>
        <comments></comments>
    </div>
</template>
<script>
    import comments from '../subcomponents/comments.vue'
    export default {
        data:function(){
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
        },
        created(){
            this.getContent()
        },
        methods:{
            getContent(){
                this.$http.get('index/main'+this.id).then(function(result){
                    if(result.state===0){
                        this.newsinfo=result.message[0]
                    }else{
                        alert("获取数据失败")
                    }
                    
                })
            },

        },
        components:{
            comments
        }
    }
    

    
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size:14px;
            color:red;
            text-align: center;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: blue;
        }
    }
</style>
