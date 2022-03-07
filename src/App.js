import './App.css';
import SideBar from './components/SideBar'
//import Tictactoe from './components/Tictactoe'
import ReactLoading from 'react-loading';

function App() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <div className="flex">
      <link rel="shortcut icon" type="image/png" href="../public/Logo.png"/>
      
    
      <SideBar />
      
      
        <div className='place-content-center flex absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <ReactLoading type="bars" color="#CBC3E3" height={height/10} width={width/10}/>

          <h1 className='font-medium leading-tight text-5xl m-auto mb-2 text-blue-600 align-baseline'>
            Work In Progress
          </h1>
        
        </div>
    </div>
  );
}

{/* <div className='flex h-screen m-auto'>
        
  <Tictactoe/>
  
</div> */}

export default App;
