// import { useContext, useState } from 'react';
// import AuthContent from '../components/Auth/AuthContent';
// import { createUser } from '../data/auth';
// import LoadingOverlay from '../components/uil/LoadingOverlay';
// import { AuthContext } from '../store/auth-context';
// import { Alert } from 'react-native';

// function SignupScreen() {

// const [isAuthenticating,setIsAuthenticating]=useState(false);

// const authCtx=useContext(AuthContext)

// async function signupHandler({email,password}){
//   setIsAuthenticating(true)
//   try{
//     const token=await createUser(email,password);
//     authCtx.authenticate(token)
//   }
//   catch(error){
//     Alert.alert('Authentication failed',
//       'Could not create user'
//     )
//     setIsAuthenticating(false)
//   }
 
// }

// if(isAuthenticating){
//   return <LoadingOverlay message='Creating user..'/>
// }

//   return <AuthContent onAuthenticate={signupHandler} />;
// }

// export default SignupScreen;


// SignupScreen.js

import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../data/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
import LoadingOverlay from '../components/uil/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. Please try again.'
      );
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      {isAuthenticating && <LoadingOverlay message="Creating user..." />}
      <AuthContent onAuthenticate={signupHandler} />
    </>
  );
}

export default SignupScreen;
