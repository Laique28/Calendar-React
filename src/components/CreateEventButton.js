import React, { useContext, useEffect, useState } from "react";
import plusImg from "../assets/plus.svg";
import lo from '../assets/pngtree-vector-logout-icon-png-image_4184683.jpg'
import GlobalContext from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  const [loginUser, setLoginUser] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['login']);
  const [admin, setAdmin] = useState('')
  useEffect(() => {
    const user = cookies.login;
    setLoginUser(user)
    const login = cookies.login;
    if (login === 'User') {
      setAdmin(false)
    } else if (login === 'Admin') {
      setAdmin(true)
    }

  })
  const handleToast = () => {
    toast.info('Successfully Logout')
  }
  return (
    <>
      {admin && (<button
        onClick={() => setShowEventModal(true)}
        className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      >
        <img src={plusImg} alt="create_event" className="w-7 h-7" />
        <span className="pl-3 pr-7"> Create</span>
      </button>)}
      <Link to={'/'}
        onClick={handleToast}
        className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      >
        <img src={lo} alt="logout" className="w-7 h-7" />
        <span className=" pl-3 pr-7">Logout {loginUser}</span>

      </Link>

    </>
  );
}
