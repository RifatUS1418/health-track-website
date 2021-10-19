import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import RangeOfServices from './components/RangeOfServices/RangeOfServices';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import useServices from './hooks/useServices';
import Doctors from './components/Doctors/Doctors';



function App() {
  const services = useServices()
  // console.log(services);
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services'>
              <RangeOfServices></RangeOfServices>
            </PrivateRoute>
            <PrivateRoute path='/doctors'>
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path='/details/:serviceId'>
              <ServiceDetails services={services}></ServiceDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
