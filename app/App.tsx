import background from './assets/background.svg';
import Home from './pages/home';
function App() {
  return <>
  <div className={`hero h-screen relative `}>
        <img src={background} alt="background" className='h-full w-full absolute' />
       <Home/>
      </div>
  </>;
}

export default App;
