import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Header from "./component/Header";
import Footer from "./component/Footer";
import AllActs from "./page/AllActs";
import Login from "./component/Login";
import StartPage from "./page/StartPage";
import Register from "./component/Register";
import PersonCenter from "./page/PersonCenter";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/start" element={<StartPage/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route index element={<Navigate to="/start/login" replace />}/>
        </Route>
        <Route path='/' element={<Navigate to="/start" replace /> }/>
        <Route path='/all-activities' element={<AllActs/>}/>
        <Route path='/person-center' element={<PersonCenter/>}>
          {/*<Route index element={<PersonInfo/>} replace/>*/}
          {/*<Route path='info' element={<PersonInfo/>}/>*/}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
