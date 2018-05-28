<template>
    <div>
        <my-banner :Mytype="'index'"></my-banner>
        <div class="row clearfix product-box" >
            <template v-for="(item,index) in indexData">
                <template v-if="index%2==0">
                    <div class="col-lg-6 text-box">
                        <p class="product-title">{{item.name}}</p>
                        <p class="product-content">{{item.summary}}</p>
                        <button class="go-btn" @click="Go()">前往体验<span style="margin-left: 5px" class="glyphicon glyphicon-arrow-right"></span></button>
                    </div>
                    <div class="col-lg-6 img-box">
                        <img :src="item.cover" class="img-responsive" alt="Responsive image">
                    </div>
                </template >
                <template v-else>
                    <div class="col-lg-6 img-box">
                        <img :src="item.cover" class="img-responsive" alt="Responsive image">
                    </div>
                    <div class="col-lg-6 text-box">
                        <p class="product-title">{{item.name}}</p>
                        <p class="product-content">{{item.summary}}</p>
                        <button class="go-btn" @click="Go()">前往体验<span style="margin-left: 5px" class="glyphicon glyphicon-arrow-right"></span></button>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import router from '../router/index';
    import banner from './banner';
    import axios from 'axios';
    export default {
        name: "index",
        data(){
            return {
                indexData:[],
                GetProductUrl:'https://api.zuiqiangyingyu.cn/a81iWQArSR9sg7b9ih.php/api/website/product/get_index_product_list'
            }
        },
        mounted:function () {
            this.GetindexData();
        },
        methods:{
            GetindexData() {
                axios.get(this.GetProductUrl).
                then((response)=>{
                        let $data= response.data;
                        if($data.c==0){

                            this.indexData = $data.d;
                        }else {
                            alert($data.m)
                        }
                    }
                ).catch(( error)=>{
                    console.log(error);
                })


            },
            Go() {
                router.push('/experience')
            }
        },
        components:{
            'my-banner':banner
        }
    }
</script>

<style scoped>

</style>