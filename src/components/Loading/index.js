// import { ThreeBounce } from 'better-react-spinkit'
import { loadingContainer, loginWrapper } from './styles'
import ImessageLogo from '../../assets/images/imessage-logo.png'


const Loading = () => {
  return (
    <div className={loginWrapper}>
      <div className={loadingContainer}>
        <img 
          src={ImessageLogo}
          alt="loading"
        />
        {/* <ThreeBounce 
          color="#fff"
          size={20}
        /> */}
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
