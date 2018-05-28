<template>
    <nav>
        <ul class="pagination" >
            <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">上一页</a></li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                <a href="#" >{{index}}</a>
            </li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#" >下一页</a></li>
        </ul>
    </nav>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "pagination",
        data(){
            return{
                current:1,     //第几页
                showItem:1,  //显示多少条
                allpage:1, //一共多少条
            }
        },
        props: ['mytotal','currentpage'],
        watch:{
            'currentpage'(n,o){
                this.showItem = n;
            },
            'mytotal'(n,o){
                this.allpage = Math.ceil(n/this.showItem);

            },

        },
        mounted(){

        },
        computed:{
            pages:function(){
                var pag = [];
                if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else{ //当前页数大于显示页数了
                    var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                        i = this.showItem;
                    if( middle >  (this.allpage - this.showItem)  ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag
            }
        },
        methods:{
            goto:function(index){
                if(index == this.current) return;
                this.current = index;
                this.$emit('pagechange', index);
                //这里可以发送ajax请求
            }
        }
    }
</script>

<style  scoped>

    .pagination {
        position: relative;

    }
    .pagination li{
        display: inline-block;
        margin:0 5px;
    }
    .pagination li a:hover{
        background:#eee;
    }
    .pagination li.active a{
        background:#0E90D2;
        color:#fff;
    }
</style>