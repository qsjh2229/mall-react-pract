import React from 'react';
import { Link } from 'react-router-dom';



const Card = (props) => {
  return (
    <div className='row'>
      
      {props.shoes.map((item, i) => {
            return (
              <div className="col-md-4 col-item" key={i}>
               <Link to={`/detail/${item.id}`}>
  <img  src={`https://codingapple1.github.io/shop/shoes${ i+1}.jpg`}
                  alt="신발1" width="100%" />
</Link>
                <h4> {item.title}</h4>
                <h4>가격: {item.price}</h4>
                <h4> {item.content}</h4>
              </div>
            );
          })}
    </div>
  );
};

export default Card;

