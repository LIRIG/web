<template>
    <div class="media-index product-box">
        <template v-for="item in media_data">
            <div class="media-li">
                <div class="media-li-left"><img :src="item.logo" class="img-responsive" alt="Responsive image"></div>
                <div class="media-li-right">
                    <p>{{item.title}}</p>
                    <p>{{item.summary}}</p>
                    <button class="more-btn" @click="detailsFn(item.id)">查看详情></button>
                </div>
            </div>
        </template>
        <div class="page-bar">
            <my-page :mytotal="atotal" :currentpage='acurrent' @pagechange="pagechange"></my-page>
        </div>
    </div>
</template>

<script>
    import router from '../router/index';
    import axios from 'axios';
    import pagination from './pagination'

    export default {
        name: "about_media",
        data(){
            return{
                media_data:[],
                GetNewsUrl:'https://api.zuiqiangyingyu.cn/a81iWQArSR9sg7b9ih.php/api/website/news/get_news_list',
                atotal:'',
                acurrent:''
            }
        },
        created(){
            axios.get(this.GetNewsUrl).then(
                (response)=>{
                    let $data= response.data;
                    if($data.c==0){
                        this.media_data = $data.d.list;
                        this.atotal = $data.d.total_count;
                        this.acurrent = $data.d.page_size;
                    }else {
                        alert($data.m)
                    }
                }).catch((error)=>{
                   console.log(error)
            })
        },
        methods:{
            detailsFn(id){
                router.push({ path: 'mediaContent', query: { 'id': id }});
                // router.push('./mediaContent')
            },
            pagechange(currentPage){
                console.log(currentPage);
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据
                axios.get(this.GetNewsUrl+'?page='+currentPage).then(
                    (response)=>{
                        let $data= response.data;
                        if($data.c==0){
                            this.media_data = $data.d.list;
                            this.atotal = $data.d.total_count;
                            this.acurrent = $data.d.page_size;
                        }else {
                            alert($data.m)
                        }
                    }).catch((error)=>{
                    console.log(error)
                })
            }
        },
        components:{
            'my-page':pagination
        }
    }
</script>

<style scoped>

</style>