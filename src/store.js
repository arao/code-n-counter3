import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workers: [{
            "name": "Aaren",
            "phone": 9587102448,
            "homeLocation": "Ambala",
            "workLocation": "Faridabad",
            "workMonth": "october",
            "worker": true
        }, {
            "name": "Aarika",
            "phone": 9767463360,
            "homeLocation": "Bhiwani",
            "workLocation": "Fatehabad",
            "workMonth": "may",
            "worker": true
        }, {
            "name": "Abagail",
            "phone": 9632963733,
            "homeLocation": "Bhiwani",
            "workLocation": "Hisar",
            "workMonth": "march",
            "worker": true
        },
            {
                "name": "Abbe",
                "phone": 9213791630,
                "homeLocation": "Gurgaon",
                "workLocation": "Jhajjar",
                "workMonth": "may",
                "worker": true
            }, {
                "name": "Abbey",
                "phone": 9763894047,
                "homeLocation": "Hisar",
                "workLocation": "Jind",
                "workMonth": "may",
                "worker": true
            }, {
                "name": "Abbie",
                "phone": 9034667120,
                "homeLocation": "Jind",
                "workLocation": "Karnal",
                "workMonth": "may",
                "worker": true
            }, {
                "name": "Abby",
                "phone": 9960739176,
                "homeLocation": "Kaithal",
                "workLocation": "Kurukshetra",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Abbye",
                "phone": 9354807785,
                "homeLocation": "Karnal",
                "workLocation": "Mahendragarh",
                "workMonth": "september",
                "worker": true
            }, {
                "name": "Abigael",
                "phone": 9296637701,
                "homeLocation": "Kurukshetra",
                "workLocation": "Mewat",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Abigail",
                "phone": 9699794677,
                "homeLocation": "Mahendragarh",
                "workLocation": "Palwal",
                "workMonth": "march",
                "worker": true
            }, {
                "name": "Abigale",
                "phone": 9409835711,
                "homeLocation": "Mewat",
                "workLocation": "Panchkula",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Abra",
                "phone": 9119453852,
                "homeLocation": "Palwal",
                "workLocation": "Panipat",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Ada",
                "phone": 9771340650,
                "homeLocation": "Panchkula",
                "workLocation": "Rewari",
                "workMonth": "may",
                "worker": true
            }, {
                "name": "Adah",
                "phone": 9339052749,
                "homeLocation": "Panipat",
                "workLocation": "Rohtak",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Adaline",
                "phone": 9560754952,
                "homeLocation": "Rewari",
                "workLocation": "Sirsa",
                "workMonth": "may",
                "worker": true
            }, {
                "name": "Adan",
                "phone": 9564391766,
                "homeLocation": "Rohtak",
                "workLocation": "Sonipat",
                "workMonth": "february",
                "worker": true
            }, {
                "name": "Adara",
                "phone": 9657231098,
                "homeLocation": "Sirsa",
                "workLocation": "Yamunanagar",
                "workMonth": "september",
                "worker": true
            }],
        provider: [{
            "name": "Abagael",
            "phone": 9261392694,
            "homeLocation": "Faridabad",
            "workLocation": "Gurgaon",
            "workMonth": "march",
            "worker": false
        }, {
            "name": "Abbi",
            "phone": 9086055785,
            "homeLocation": "Jhajjar",
            "workLocation": "Kaithal",
            "workMonth": "march",
            "worker": false
        },  {
            "name": "Abbye",
            "phone": 9354807785,
            "homeLocation": "Karnal",
            "workLocation": "Mahendragarh",
            "workMonth": "september",
            "worker": true
        }, {
            "name": "Abigael",
            "phone": 9296637701,
            "homeLocation": "Kurukshetra",
            "workLocation": "Mewat",
            "workMonth": "february",
            "worker": true
        }, {
            "name": "Abigail",
            "phone": 9699794677,
            "homeLocation": "Mahendragarh",
            "workLocation": "Palwal",
            "workMonth": "march",
            "worker": true
        }, {
            "name": "Abigale",
            "phone": 9409835711,
            "homeLocation": "Mewat",
            "workLocation": "Panchkula",
            "workMonth": "february",
            "worker": true
        }, {
            "name": "Abra",
            "phone": 9119453852,
            "homeLocation": "Palwal",
            "workLocation": "Panipat",
            "workMonth": "february",
            "worker": true
        }, {
            "name": "Ada",
            "phone": 9771340650,
            "homeLocation": "Panchkula",
            "workLocation": "Rewari",
            "workMonth": "may",
            "worker": true
        }, {
            "name": "Adah",
            "phone": 9339052749,
            "homeLocation": "Panipat",
            "workLocation": "Rohtak",
            "workMonth": "february",
            "worker": true
        }, {
            "name": "Adaline",
            "phone": 9560754952,
            "homeLocation": "Rewari",
            "workLocation": "Sirsa",
            "workMonth": "may",
            "worker": true
        }, {
            "name": "Adan",
            "phone": 9564391766,
            "homeLocation": "Rohtak",
            "workLocation": "Sonipat",
            "workMonth": "february",
            "worker": true
        }, {
            "name": "Adara",
            "phone": 9657231098,
            "homeLocation": "Sirsa",
            "workLocation": "Yamunanagar",
            "workMonth": "september",
            "worker": true
        }],

        city: ['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
        months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
        user: undefined
    },
    getters: {
        workerInCity: (state => payload => {
            let sol = [];
            for (let worker of state.workers) {
                if (worker.homeLocation === payload.location && worker !== state.user) {
                    sol.push(worker)
                }
            }
            return sol;
        }),
        workerArrivingInCity: (state => payload => {
                let sol = [];
                for (let worker of state.workers) {
                    if (worker.workLocation === payload.location && worker !== state.user) {
                        sol.push(worker)
                    }
                }
                return sol;
            }
        ),
        totalRegisteredWorkers(state) {
            return state.workers.length
        },
        workInCity: (state => payload => {
            let sol = []

            for (let provider of state.provider) {
                if (provider.homeLocation === payload.location) {
                    sol.push(provider);
                }
            }
            console.log(sol)
            return sol;
        }),
        workInMonth: (state => payload => {
            let sol = []
            console.log(payload)
            for (let provider of state.provider) {
                if (provider.workMonth === payload.month) {
                    sol.push(provider);
                }
            }
            console.log(sol)
            return sol;
        })
    },

    mutations: {
        logout(state) {
            state.user = undefined;
        },
        workerLogin(state, payload) {
            console.log(`workerLogin Called with ${payload}`)
            for (let worker of state.workers) {
                if (worker.name === payload.username) {
                    state.user = worker;
                }
            }
        },
        providerLogin(state, payload) {
            for (let worker of state.provider) {
                if (worker.name === payload.username) {
                    state.user = worker;
                }
            }
        },

    },
    actions: {}
})
