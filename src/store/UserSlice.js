import { createSlice } from "@reduxjs/toolkit"

let user=  createSlice({  //스테이트 만들기
    name: 'user',
    initialState:{name :'kim', age : 20},

    reducers: {
        changeName(state){
         state.name = '박'
        },
        increase(state,a){
            state.age = state.age+a.payload
        }
    }
   

})
export let {changeName , increase} = user.actions
export default user