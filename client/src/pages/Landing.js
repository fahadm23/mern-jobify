import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">

          {/* info div */}
          <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>Welcome to Jobify, the ultimate job application tracker app! Jobify makes it easy to keep track 
               of all your job applications in one place. With its user-friendly interface, 
               you can easily add and manage all of your applications. Say goodbye to the 
               hassle of managing multiple applications and hello to an efficient job search with Jobify.
               </p>
              <Link to="/register" className="btn btn-hero">Login/Register</Link>
          </div>

          {/* image */}
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}


export default Landing