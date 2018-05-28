<template>
    <div class="product-box media-content">
        <button @click="BackFn()" class="back-btn"><span class="glyphicon glyphicon-arrow-left"></span>返回</button>
        <div class="news_title">{{Detail_data.title}}</div>
        <div class="news_content" v-html="Detail_data.content">
        </div>
    </div>
</template>

<script>
    import router from '../router/index';
    import axios from 'axios';


    export default {
        name: "media_content",
        data(){
            return {
                GetDetailUrl:'https://api.zuiqiangyingyu.cn/a81iWQArSR9sg7b9ih.php/api/website/news/get_news_detail',
                Detail_data:{},
                Detail_id:'',
            }
        },
        mounted(){
            axios.get(this.GetDetailUrl+"?id="+this.$route.query.id).
            then((response)=>{
                    let $data= response.data;
                    if($data.c==0){
                        this.Detail_data = $data.d;
                    }else {
                        alert($data.m)
                    }
                }).
            catch((error)=>{
                console.log(error)
            })
        },
        methods:{
            BackFn:function () {
                router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>