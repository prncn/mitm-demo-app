import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatApp from './pages/ChatApp';
import Main from './pages/Main';

export default function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/chatapp" element={<ChatApp />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
