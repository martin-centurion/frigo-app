import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div>

      

    <BrowserRouter>
          <NavBar />
          <Banner />
          <Routes>

            <Route 
              path='/'
              element= { <ItemListContainer />}
            />
            
            <Route 
              path='/producto/:idUser'
              element= {<ItemDetailContainer /> }
            />

            <Route 
              path='/category/:idCategory'
              element= { <ItemListContainer />}
            />
          
          </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
