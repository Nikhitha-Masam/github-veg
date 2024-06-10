// import AuthContent from '../components/Auth/AuthContent';
// import { useContext, useState } from 'react';
// import LoadingOverlay from '../components/uil/LoadingOverlay';
// import { login } from '../data/auth';
// import { Alert } from 'react-native';
// import { AuthContext } from '../store/auth-context';

// function LoginScreen() {

//   const [isAuthenticating,setIsAuthenticating]=useState(false);

//   const authCtx=useContext(AuthContext)

//   async function loginHandler({email,password}){
//     setIsAuthenticating(true)
//     try{
//       const token=await login(email,password);
//       authCtx.authenticate(token)
//     }
//     catch(error){
//       Alert.alert(
//         'Authentication failed',
//         'Could not log you in, Please check your credentials'
//       )
//       setIsAuthenticating(false)
//     }
    
    
//   }
  
//   if(isAuthenticating){
//     return <LoadingOverlay message='Loggin you in..'/>
//   }

//   return <AuthContent isLogin onAuthenticate={loginHandler} />;
// }

// export default LoginScreen;y


// LoginScreen.js

import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../data/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
import LoadingOverlay from '../components/uil/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credentials.'
      );
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      {isAuthenticating && <LoadingOverlay message="Logging you in..." />}
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  );
}

export default LoginScreen;
