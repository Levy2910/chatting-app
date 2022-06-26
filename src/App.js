import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import Empty from "./Empty";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Routes>
                <Route path="/room/:roomId" element={<Chat />}></Route>
                <Route path="/room/empty" element={<Empty />}></Route>
                <Route path="/" element=""></Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
