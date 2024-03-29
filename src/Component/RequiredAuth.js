import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.init";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';


function RequireAuth({ children }) {
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!user.emailVerified) {
  //     return (
  //         <div className='text-center mt-5 pt-5'>
  //             <h1>Your Email is not Verified.</h1>
  //             <button className="update-btn"
  //                 onClick={async () => {
  //                     await sendEmailVerification();
  //                     alert("Verification Email Sent")
  //                 }}
  //             >
  //                 Verify email
  //             </button>

  //         </div>
  //     )
  // }

  return children;
}

export default RequireAuth;