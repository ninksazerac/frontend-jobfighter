import React from 'react';

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
const noti = () => {
    toast("hi");
    toast.success("Success");
    toast.error("Error");
}
export default function Notistudent(){
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