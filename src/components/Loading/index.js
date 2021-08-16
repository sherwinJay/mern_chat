import { Circle, ChasingDots, Pulse, Wave, CubeGrid, ThreeBounce } from 'better-react-spinkit'
import { loadingContainer, loginWrapper } from './styles'
import ImessageLogo from '../../assets/images/imessage-logo.png'


const Loading = () => {
  return (
    <div className={loginWrapper}>
      <div className={loadingContainer}>
        <img 
          src={ImessageLogo}
        />
        <ThreeBounce 
          color="#fff"
          size={20}
        />
      </div>
    </div>
  )
}

export default Loading
