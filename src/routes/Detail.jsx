import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import{ Context1} from '../App'
function Tabs({ 탭 } ,{}) {
  let content;
  let [fade, setFade] = useState("");
  let {재고} =useContext(Context1)
  useEffect(() => {
    setTimeout(() => {
      setFade("endp");
    }, 200);
    return () => {
      setFade("");
    };
  }, [탭]);
  if (탭 === 0) {
    content = <div>{재고}</div>;
  } else if (탭 === 1) {
    content = <div>내용1</div>;
  } else if (탭 === 2) {
    content = <div>내용2</div>;
  }

  return <div className={`start ${fade}`}>{content}</div>;
}

const Detail = (props) => {
 let  { 재고} = useContext(Context1)
  let [num, setNum] = useState("");
  let [infonum, setInfoNum] = useState("");
  let [탭, 탭변경] = useState(0);
  let [page, setPage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setPage("endp");
    }, 200);
  }, []);
/* let [fade2,setFade2] =('')
  
  useEffect(() => {
    setTimeout(() => {
      setPage("end");
    }, 200);
  }, []);
 */

  useEffect(() => {
    if (isNaN(num) == true) {
      setInfoNum(<div>숫자를 입력해 주세요</div>);
    }
  }, [num]);

  let { id } = useParams();
  let findHandler = props.shoes.find((x) => x.id == id);
  return (
    <div className={`container start ${page}`}>
      <div className="alert alertWarning">
        {/*   <input type="text" onChange={(e)=>{setNum( e.target.value)}} /> */}
        <input
          type="text"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        {isNaN(num) && <label>{infonum}</label>}
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link to="/detail/:id">
            {" "}
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                findHandler.id + 1
              }.jpg`}
              width="100%"
            />
          </Link>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findHandler.title}</h4>
          <p>{findHandler.content}</p>
          <p>{findHandler.price} 원</p>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item
          onClick={() => {
            탭변경(0);
          }}
        >
          <Nav.Link eventKey="link-0">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            탭변경(1);
          }}
        >
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            탭변경(2);
          }}
        >
          <Nav.Link eventKey="link-3">Option 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabs 탭={탭}  shoes={props.shoes} ></Tabs>
    </div>
  );
};

export default Detail;
