<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <router-link class="navbar-brand" to="/">Milan</router-link>
            <!-- Links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="changeSelect(1)" >Worker in City</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="changeSelect(2)" >Worker Arriving in City</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="changeSelect(3)" >Worker in Nearby City</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout" >Log Out</a>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="row col-lg-6">
                <div v-if="select === 1" class="form-group " >
                        <label for="inCity">Select city (select one):</label>
                        <select class="form-control" id="inCity" v-model="citySelected"  >
                                <option v-for='city in getCity' :value="city" :key="city">{{city}}</option>
                        </select>
                </div>
                <div v-if="select === 2" class="form-group ">
                    <label for="arrivingCity">Select city (select one):</label>
                    <select class="form-control" id="arrivingCity" v-model="citySelected"  >
                        <option v-for='city in getCity' :value="city" :key="city">{{city}}</option>
                    </select>
                </div>
                <div v-if="select === 3" class="form-group " >
                    <label for="nearCity">Select city (select one):</label>
                    <select class="form-control" id="nearCity" v-model="citySelected"  >
                        <option v-for='city in getCity' :value="city" :key="city">{{city}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row col-lg-6">
                <!--card-->
                <div v-for="worker in workers" class="card col-lg-6 " :key="worker.name">
                    <h3> {{ worker.name }} </h3>
                    <p>  {{worker.homeLocation}}</p>
                    <p>  {{worker.phone}}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "mainProvider",
        data() {
            return {
                citySelected : "",
                select : 0
            }
        },
        computed: {
            workers(){
                if(this.citySelected.length === 0){
                    return
                }
                if(this.select === 1){
                    return this.$store.getters.workerInCity({location: this.citySelected})
                }else if(this.select === 2){
                    return this.$store.getters.workerArrivingInCity({location : this.citySelected})
                } else if(this.select === 3){
                    return this.$store.getters.workerInCity({location : this.citySelected })
                }
            },
            getCity(){
                return this.$store.state.city
            },
            ...mapGetters(['workerInCity', 'workerArrivingInCity', 'totalRegisteredWorkers'])
        },
        methods:{
            changeSelect(value){
                if(this.select === value){
                    this.select = 0;
                }else{
                    this.select = value;
                }
            },
            logout(){
                this.$store.commit('logout');
                this.$router.push('/');
            }

        }
        // beforeMount() {
        //     if (this.$store.state.user === undefined) {
        //         this.$router.push('/');
        //     }
        // }
    }
</script>

<style scoped>
    .card{
        margin-top: 5px;
        margin-bottom: 2px;
    }
</style>