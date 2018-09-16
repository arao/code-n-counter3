<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <router-link class="navbar-brand" to="/">Milan</router-link>
            <!-- Links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="changeSelect(1)">Work in City</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="changeSelect(2)">Work in Month</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">Log Out</a>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="row col-lg-6">
                <div v-if="select === 1" class="form-group ">
                    <label for="inCity">Select city (select one):</label>
                    <select class="form-control" id="inCity" v-model="citySelected">
                        <option v-for='city in getCity' :value="city" :key="city">{{city}}</option>
                    </select>
                </div>
                <div v-if="select === 2" class="form-group ">
                    <label for="arrivingCity">Select month (select one):</label>
                    <select class="form-control" id="arrivingCity" v-model="monthSelected">
                        <option v-for='city in getMonth' :value="city" :key="city">{{ city }}</option>
                    </select>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <!--card-->
                <div v-for="worker in workers" class="card col-lg-4 col-md-6 col-sm-8 col-xs-12 " :key="worker.name">
                    <h3> {{ worker.name }} </h3>
                    <p> {{worker.homeLocation}}</p>
                    <p> {{worker.phone}}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "mainWorker",
        data() {
            return {
                citySelected: "",
                monthSelected: "",
                select: 1
            }
        },
        computed: {
            workers() {
                if (this.citySelected.length === 0) {
                    return
                }
                if (this.select === 1) {
                    return this.$store.getters.workInCity({location: this.citySelected})
                } else if (this.select === 2) {
                    return this.$store.getters.workInMonth({month: this.monthSelected})
                }
            },
            getCity() {
                return this.$store.state.city
            },
            getMonth() {
                return this.$store.state.months
            }
        },
        methods: {
            changeSelect(value) {
                if (this.select === value) {
                    this.select = 0;
                } else {
                    this.select = value;
                }
            },
            logout() {
                this.$store.commit('logout');
                this.$router.push('/');
            }

        },
        beforeMount() {
            if (this.$store.state.user === undefined) {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .card{
        margin-top: 5px;
        margin-bottom: 2px;
    }
</style>