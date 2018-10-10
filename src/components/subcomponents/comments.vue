<template>
    <div>
        <hr>
        <h1>评论专区</h1>
        <textarea placeholder="请开始你的表演（120字以内）"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="content-list">
            <div class="content-item">
                <div class="item-title">
                    第一楼&nbsp;文章的个人见解&nbsp;匿名用户&nbsp;发表时间：2012
                </div>
                <div class="item-body">
                    这个车非常的垃圾,买了之后我后悔了一辈子
                </div>
            </div>
            <div class="content-item">
                <div class="item-title">
                    第一楼&nbsp;文章的个人见解&nbsp;匿名用户&nbsp;发表时间：2012
                </div>
                <div class="item-body">
                    这个车非常的垃圾,买了之后我后悔了一辈子
                </div>
            </div>
            <div class="content-item">
                <div class="item-title">
                    第一楼&nbsp;文章的个人见解&nbsp;匿名用户&nbsp;发表时间：2012
                </div>
                <div class="item-body">
                    这个车非常的垃圾,买了之后我后悔了一辈子
                </div>
            </div>
            <div class="content-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="item-title">
                    第{{i}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;发表时间:{{ite.add_time}}
                </div>
                <div class="item-body">
                   {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain :click="getmore">查看更多</mt-button>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                pageIdex:1,
                comments:[]
            }
        },
        props:['id'],
        created(){
            this.getcomment()
        },
        methods:{
            getcomment(){
                this.$http.get('/api/getcomments/'+this.id+'?pageindex='+this.pageIdex).then(function(result){
                    if(result.status===0){
                        this.comments=comments.concat(result.body.message)
                    }else{
                        alert("你大爷")
                    }
                })
            },
            getmore(){
                this.pageIdex++
                getcomment()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .content-list{
        margin: 10px 0;
        .content-item{
            font-size: 12px;
            .item-title{
                background-color: gray;
            }
            .item.body{
                line-height: 55px;
                height: 100px;
                text-indent: 2em;
            }
        }
    }
</style>
