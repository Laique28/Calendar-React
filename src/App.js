import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom'
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>

      {showEventModal && <EventModal />}
      {/* <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div> */}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {/* <Sidebar />
          <Month month={currenMonth} /> */}
          {/* 
          {login ? <Login info={login} /> : <><Sidebar />
          <Month month={currenMonth} /></>} */}
          {/* <Sidebar />
          <Month month={currenMonth} /> */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/main" element={<><Sidebar /><Month month={currenMonth} /></>} />
            </Routes>

          </HashRouter>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
