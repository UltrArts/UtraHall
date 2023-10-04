
// stores/counter.js
import { defineStore } from 'pinia'

export const useHallStore = defineStore('hall', {
  state: () => {
    return { 
        halls:[
            {id: 1, name: 'Salao 1', capacity: 25, price: 200, status: false},
            {id: 2, name: 'Salao 2', capacity: 105, price: 1000, status: false},
        ]
     }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addHall(hall) {
      this.halls.push(hall)
    },
    deleteHall(){

    }
  },
})