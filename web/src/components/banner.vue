<template>
    <div class="banner-size">
        <img class="img-responsive" alt="Responsive image" :src="banner.img" id="banner">
        <div class="banner-div-text">
            <h1>国内顶级<br>互动</h1><h2>游戏社交平台</h2><h3>超过<br>8000万人</h3><h4>在这里分享快乐</h4>
        </div>
    </div>
</template>

<script>

    export default {
        name: "banner",
        data(){
            return {
                banner_data:[
                    {
                        name:'index',
                        img:require('../assets/images/banner copy.png'),
                    },
                    {
                        name:'about',
                        img:require('../assets/images/banner-2.png'),
                    },
                    {
                        name:'experience',
                        img:require('../assets/images/banner-3.png'),
                    },
                    {
                        name:'recruitment',
                        img:require('../assets/images/banner-2.png'),
                    }
                ],
                banner:{}
            }
        },
        mounted(){
            let t = this,
                $menu = t.Mytype;
            for(let a in t.banner_data){
                if(t.banner_data[a].name==$menu){
                    t.banner = t.banner_data[a];
                    return false;
                }
            }
        },
        props:['Mytype']
    }
</script>

<style scoped>

</style>