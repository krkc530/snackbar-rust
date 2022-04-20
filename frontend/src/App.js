import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Board from './components/Board';
import BasePost from './components/Post/BasePost';
import Posting from './components/Post/Posting';
import MyMenu from './components/MyMenu';
import NotFound from './components/NotFound';
import { Row } from 'antd';

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const getData = async () => {
  //   const response = await axios("http://localhost:8000/hello");
  //   // console.log(response.data);
  //   setData(response.data)
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {data}
  //       </p>
  //     </header>
  //   </div>
  // );
  return (
    <Row typeof='flex' justify='center'>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postid" element={<BasePost />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/layout" element={<MyMenu />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </Row>
  );
}

export default App;

