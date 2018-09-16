<template>
    <div class="container">
        <div class="login-form text-center">
            <form >
                <h2 class="text-center">Welcome Back</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Username" required="required" v-model="username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
                </div>
                <div class="form-group">
                    <button @click.prevent="login" type="submit" class="btn btn-primary btn-block">Log in</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "providerLogin",
        data(){
            return{
                username: undefined,
                password : undefined
            }
        },
        methods:{
            login(){
                if(this.username && this.password) {
                    this.$store.commit('providerLogin', {username: this.username})
                }
                if(this.$store.state.user){
                    this.$router.push('/mainProvider');
                }
            }
        }
    }
</script>

<style scoped>
.login-form{
    background-color: beige;
    width: 400px;
    height: 300px;
    margin-top: 200px;
    box-shadow: 0 0 10px 1px gray;
    padding: 16px;
}
    h2{
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>