import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { CartContextProvider } from './Context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
      
          <BrowserRouter>
                <NavBar />
                <Banner />
                <Routes>

                  <Route 
                    path='/'
                    element= { 
                      <ItemListContainer />
                             }
                  />
                  
                  <Route 
                    path='/producto/:idUser'
                    element= { <ItemDetailContainer /> }
                  />

                  <Route 
                    path='/category/:idCategory'
                    element= { <ItemListContainer />}
                  />
                
                </Routes>

                <Footer />

          </BrowserRouter>

      </CartContextProvider>

    </div>
  );
}

export default App;
