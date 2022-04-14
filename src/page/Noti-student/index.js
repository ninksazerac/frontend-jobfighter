import React from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const handlePromiseToast = () => {
//     toast.promise(
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if ((Math.random(10) * 10) % 2 === 0) {
//             resolve('foo');
//           } else {
//             reject('bar');
//           }
//         }, 2500);
//       }),
//       {
//         loading: 'Authenticating...',
//         success: 'Authentication success!',
//         error: 'Authentication failed!',
//       }
//     );
//   };


export default function Notistudent(){
    const navigate = useNavigate();
const noti = () => {
    toast("hi");
    navigate("/");
    toast.success("Success");
    toast.error("Error");
}
    return(
        <div>
        <button onClick={noti}>Notify!</button>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      </div>
    );
}