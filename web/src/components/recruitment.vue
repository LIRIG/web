<template>
    <div class="about">
        <my-banner :Mytype="'recruitment'"></my-banner>
    </div>
</template>

<script>
    import banner from './banner'
    export default {
        name: "recruitment",
        components:{
            'my-banner':banner
        }
    }
</script>

<style scoped>

</style>