import Vue from 'vue'

import Vuex from 'Vuex'

import axios from '../axios.auth'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        idToken:null,
        userId:null
    },
    mutations: {
        authUser(state, userData){
            state.idToken = userData.token
            state.userId = userData.userId
        }
    },
    actions: {
        signup({commit}, authData) {
            axios.post('/signupNewUser?key=AIzaSyAb09gEFH2IncEJHIyQ_freCGqas5lLSnQ',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }).then(res => {
                console.log(res)
                    commit('authUser',{
                        token:res.data.idToken,
                        userId:res.data.localId
                    })
                 }).catch(res => {
                console.log(res)
            });
        },
        login({commit}, authData) {
            axios.post('/verifyPassword?key=AIzaSyAb09gEFH2IncEJHIyQ_freCGqas5lLSnQ',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }).then(res => {
                console.log(res)
                commit('authUser',{
                    token:res.data.idToken,
                    userId:res.data.localId
                })
            }).catch(res => {
                console.log(res)
            });
        },

    },
    getters: {},

})