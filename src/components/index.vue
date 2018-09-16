<template>
    <div class="container ">
        <div class="row">
            <div class="col-lg-12 col-xl-12">
                <button class="btn btn-info">
                    <router-link to="/workerLogin" class="">Worker</router-link>
                </button>
                <button class="btn btn-info">
                    <router-link to="/providerLogin" class="">Provider</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100vw;
        height: 100vh;
    }
    .row{
        margin-top: 300px;
        transform: translateY(-50%);
    }
    button{
        margin: 25px;
        min-width: fit-content;
        width: 200px;
        height: 70px;
    }
    a{
        text-decoration: none;
        color : white;
        font-size: x-large;
    }
</style>