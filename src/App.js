import './App.css';
import Navbar from './components/Navbar.jsx/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer.jsx';


function App() {
  return (
<>
 <Navbar/>
 <ItemListContainer/>
 <div className='section-1'>

 </div>
 <ItemDetailContainer/>



</>

  

  );
}

export default App;