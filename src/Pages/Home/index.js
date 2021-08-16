import { homeContainer, homeImg } from "./styles"
import Image from '../../assets/images/undraw_elements_cipa.svg'


const Home = () => {
  return (
    <div className={homeContainer}>
      <img src={Image} className={homeImg} />
      <h1>Select/Create a chat</h1>
    </div>
  )
}

export default Home
