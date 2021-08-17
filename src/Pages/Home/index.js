import { homeContainer, homeHeader, homeImg } from "./styles"
import Image from '../../assets/images/undraw_elements_cipa.svg'
import MenuIcon from '@material-ui/icons/Menu';


const Home = ({toggle}) => {
  return (
    <div className={homeContainer}>
      <div className={homeHeader}>
        <MenuIcon onClick={toggle} />
      </div>
      <img 
        src={Image} 
        className={homeImg}
      />
      <h1>
        Select/Create a chat
      </h1>
    </div>
  )
}

export default Home
