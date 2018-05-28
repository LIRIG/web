<template>
    <div class="experience">
        <my-banner :Mytype="'experience'"></my-banner>
        <div class="product-box ">
            <template v-for="(item,index) in programData">
                <div class="experience-size" >
                    <p class="program-title">{{item.name}}</p>
                    <div class="program-content">
                        <div class="left-box">
                            <p><img :src="item.qrcode" class="img-responsive" alt="Responsive image"></p>
                            <span>微信扫一扫,立即体验</span>
                        </div>
                        <div class="right-box">{{item.summary}}</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import banner from './banner';
    import axios from 'axios';
    export default {
        name: "experience",
        data(){
            return{
                programData:[],
                GetTasteUrl:'https://api.zuiqiangyingyu.cn/a81iWQArSR9sg7b9ih.php/api/website/product/get_taste_product_list'
            }
        },
        mounted(){
            axios.get(this.GetTasteUrl).
            then((response)=>{
                    let $data= response.data;
                    if($data.c==0){
                        this.programData = $data.d;
                    }else {
                        alert($data.m)
                    }
                }
            ).catch(( error)=>{
                console.log(error);
            })
        },
        methods:{

        },
        components:{
            'my-banner':banner
        }
    }
</script>

<style scoped>

</style>