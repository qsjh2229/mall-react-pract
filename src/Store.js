import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/UserSlice";

<user></user>



 let stock=  createSlice({  //스테이트 만들기
    name: 'stock',
    initialState:[10,11,12]
})
 let add=  createSlice({  //스테이트 만들기

    name:'add',
    initialState: [
    {id:0, name: 'white and black', count:2},
    {id:2, name: 'Grey Yordan', count:1},
   ],
   reducers :{
    addCount(state, action) {
        let 번호= state.findIndex((a)=>{return a.id === action.payload})
        state[번호].count++;
    },
    mCount(state,action){
     const item = state[action.payload]
     if(item){
        item.count = Math.max(0, item.count - 1);

     }
        /*    state[action.payload.itemIndex].count -= action.payload.amount; // 선택된 아이템의 카운트 값을 지정한 양만큼 감소시킴 */

    }
   }
})
export const { addCount,mCount } = add.actions;
export default configureStore({        //스테이트 등록
    reducer:{
        user :user.reducer,
        stock:stock.reducer,
        add:add.reducer
    }
})