import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

function App() {

  const useStyles = makeStyles({
    App:{
      backgroundColor:"#14161a",
      color : "white",
      minHeight : "100vh"
    }
  })

  const classes = useStyles();

  return (
    <Router>
      <div className = {classes.App}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/coins/:id' element={<CoinPage/>} />
        </Routes>
      </div>
     </Router>
  );
}

export default App;
