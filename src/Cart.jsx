import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount ,mCount} from './Store';

import { changeName, increase } from './store/UserSlice';
const Cart = () => {

    let  state= useSelector((state)=>{ return state})   //리덕스 스토어 가져와주는 함수
    console.log(state)
    let dispatch=  useDispatch()   //stdoe js로 요청
    
    return (
        <div>
            {state.user.name} {state.user.age}의 장바구니
            <button onClick={() => dispatch(increase(15))} > 버튼 </button>
              <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
       
        {state.add.map((item,idx)=>{
            return(
                <tr key={item.idx}>
                <td>{idx +1}</td>
                <td> 제품명{item.name}</td>
                <td> 수량{item.count}</td>
                <td> <button onClick={()=>{
                  dispatch(  addCount(state.add[idx].id))

                }}>+</button>
                 <button onClick={()=>{
                  dispatch(  mCount(idx))

                }}>-</button>
                </td>
               
              
              </tr>
            )
        })}
       
      </tbody>
    </Table>
        </div>
    );
};

export default Cart;