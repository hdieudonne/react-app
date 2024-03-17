import React from 'react';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';
import Layout from './Pages/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<h1>Index Page</h1>}/> take as to index page*/}
          <Route path="/auth" element={<LoginPage />} />
          {/* <Route path="/product/:id" element={<h1>Product details</h1>} /> */}
          <Route path="/dashboard" element={<Layout/>}>
            <Route index  element={<h1>list page</h1>}></Route>
            <Route path="chat" element={<ChatPage/>}></Route>
            <Route path="profile" element={<ProfilePage/>}></Route>
           
          </Route>
          <Route path="*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
