import logo from './logo.svg';
import './App.css';
import BasicGrid from './components/main';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/navbar';
import { useContext } from 'react';
import { MainContext } from './components/context/MainProvider';
import Cart from './components/cart';
import Container from '@mui/material/Container';
import Review from './components/review/Review';

function App() {
  const { currentInterFace, setCurrentInterFace } = useContext(MainContext)
  const component = {
    dashboard: Dashboard,
    cart: Cart,
    review:Review
  }
  let Component = component[currentInterFace]
  return (
    <div className="App">
      {/* <BasicGrid /> */}
      <div>

        <Header />
      </div>
      {/* <Dashboard /> */}
      {Component &&
        <Container maxWidth="lg" sx={{ marginTop: "100px" }} >

          <Component />
        </Container>
      }
    </div>
  );
}

export default App;
