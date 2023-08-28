import './App.css';
import { LeftNav } from './component/LeftNav';
import { Routes,Route } from 'react-router';
import { Inbox } from './pages/Inbox';
import { Spam } from './pages/Spam';
import { Trash } from './pages/Trash';

function App() {
  return (
    <div className="App flex">
      <div className='md:w-[15vw] h-screen px-12 py-10'>
        <LeftNav/>
      </div>
      <div className='md:w-[85vw] overflow-y-auto'>
        <h1 className='text-center text-2xl font-[500]'>Bijaylaxmi's mail box</h1>
     <Routes>
      <Route path='/' element={<Inbox/>}/>
      <Route path='/spam' element={<Spam/>}/>
      <Route path='/trash' element={<Trash/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
