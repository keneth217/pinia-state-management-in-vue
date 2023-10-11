import {defineStore} from 'pinia'


export const useCounterStore=defineStore('couner',{
    state:()=>({
        count:2,
        name:'keneth',
    }),
    getters:{
        doubleCount:(state)=>state.count*2
    },
    actions:{
        increment(){
        this.count++
},
decrement(){
    this.count--
},
    },
});