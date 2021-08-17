import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { loginBox, loginContainer } from './styles';
import ImessageLogo from '../../assets/images/imessage-logo.png'

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <div className={loginContainer}>
      <h1>iMessage</h1>
      <div className={loginBox}>
        <img src={ImessageLogo} />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
        </div>
    </div>
  )
}

export default Login