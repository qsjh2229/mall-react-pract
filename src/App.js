import { createContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data";
import Card from "./component/Card";
import Detail from "./routes/Detail";
import About from "./routes/About";
import axios from "axios";
import Cart from "./Cart";


import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";


export let Context1= createContext( )  //ㄴstate 보관함



function App() {
  let navigate = useNavigate();
 let  [재고] = useState([10,11,12])
  let [idx, setIdx] = useState(0);
  let [loading, setLoading] = useState('');
  let [shoes, setShoes] = useState(data);
  let [noItem, setNoItem] = useState("더보기");

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail/:id");
              }}
            >
              detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  <button
                    onClick={() => {
                      setLoading('로딩중 입니다')
                      const nextIdx = idx + 1;

                      if (nextIdx <= 3) {
                        axios
                          .get(
                            `https://codingapple1.github.io/shop/data${
                              2 + idx
                            }.json`
                          )
                          .then((res) => {
                            let copy = [...shoes, ...res.data];
                            setShoes(copy);
                            setIdx(nextIdx);
                            setLoading('')
                          })
                          .catch((err) => {
                            console.error(err);
                            setLoading('')
                           
                          });
                      }

                      if (nextIdx >= 3) {
                        setNoItem("상품이 없습니다");
                      } else {
                        setNoItem("더보기");
                      }
                    }}
                  >
                   
                    {noItem}
                  </button>
                  {loading}
                  <Card shoes={shoes}></Card>
                  <div className="row">
                    {/* {newShoes.map((item) => {
                      return (
                      
                          <div  key={item.id} className="col-md-4 col-item" >
                            <h4>{item.title} </h4>
                            <h4>{item.content} </h4>
                            <h4>{item.price} </h4>
                          </div>
                      
                      );
                    })} */}
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
       <Route path="/detail/:id" element={  <Context1.Provider value={{재고, shoes}}> <Detail shoes={shoes}  /> </Context1.Provider> } />
        <Route path="*" element={<div> 없는 페이지 입니다</div>} />
        <Route path="/cart" element ={<Cart></Cart>}/>
      </Routes>
    </>
  );
}

export default App;
