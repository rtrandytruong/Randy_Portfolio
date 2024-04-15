import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works} from './components';



const App = () => {
  return (
    // BrowserRouter enables client-side routing in React applications
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className= "realtive z-0">
        </div>
    </div>

    </BrowserRouter>
  )
}
export default App
