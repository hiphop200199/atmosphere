import './App.css'
import  './Atmos.css'
import Table from './Table';
import Aside from './Aside';
import { useState } from 'react';
import Subtitle from './Subtitle';
function App() {
  const [classCategory,setClassCategory]=useState("clean");
 
  const changeToSpring=()=>{
   
    setClassCategory("spring");
  };
  const changeToTech=()=>{
    
    setClassCategory("tech");
  };
  const changeToLava=()=>{
   
    setClassCategory("lava");
  };
  const changeToCaramel=()=>{
   
    setClassCategory("caramel");
  };
  const changeToSea=()=>{
   
    setClassCategory("sea");
  };
  const changeToClean=()=>{
   
    setClassCategory("clean");
  };
  const changeToFlourish=()=>{
   
    setClassCategory("flourish");
  };
  return (
    <div className="clean-container ">
      <header className="clean-header container-background" >
      <h1 className="clean-h1">Atmosphere樣式.</h1>
      <nav className={`${classCategory}-navbar`}>
        <ul className={`${classCategory}-ul`}>
          <li className={`${classCategory}-li`}><button onClick={changeToClean} className='clean-button'>clean</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToSpring} className='spring-button'>spring</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToTech} className='tech-button'>tech</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToCaramel} className='caramel-button'>caramel</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToLava} className='lava-button'>lava</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToSea} className='sea-button'>sea</button></li>
          <li className={`${classCategory}-li`}><button onClick={changeToFlourish} className='flourish-button'>flourish</button></li>
        </ul>
      </nav>
      </header>
      <main className="clean-main container-background">
      <Subtitle classType={classCategory}/>
      <Table classType={classCategory}/>
    <Aside classType={classCategory} />
      </main>
      <footer className="clean-footer container-background">
        <a className={`${classCategory}-a-link`} href="https://www.facebook.com/zongwuc" target={"_blank"} rel="noreferrer">facebook</a>
        <a className={`${classCategory}-a-link`} href="https://www.instagram.com/hiphop200199/" target={"_blank"} rel="noreferrer">instagram</a>
        <a className={`${classCategory}-a-link`} href="https://github.com/hiphop200199" target={"_blank"} rel="noreferrer">github</a>
       
        <p className={`${classCategory}-a-link`}>email:hiphop200199@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
