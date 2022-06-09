import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Login from './pages/Login'
import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Engineer from './pages/Engineer';
import RequiredAuth from './components/RequiredAuth';
import './App.css';

const roles = {
  'ADMIN': 'ADMIN',
  'CUSTOMER': 'CUSTOMER',
  'ENGINEER': 'ENGINEER'
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <Suspense fallback={<div>Loading.....</div>}>
            <Login />
          </Suspense>}
        />
        <Route element={<RequiredAuth role={roles.CUSTOMER} />}>
          <Route path='/customer' element={<Customer />} />
        </Route>

        <Route element={<RequiredAuth role={roles.ADMIN} />}>
          <Route path='/admin' element={<Admin />} />
        </Route>

        <Route element={<RequiredAuth role={roles.ENGINEER} />}>
          <Route path='/engineer' element={<Engineer />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
