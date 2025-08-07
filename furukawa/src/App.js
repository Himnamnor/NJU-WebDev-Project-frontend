import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Footer from "./component/Footer";
import AllActs from "./page/AllActs";
import Login from "./component/Login";
import StartPage from "./page/StartPage";
function App() {
  return (
    // <StartPage/>
      <AllActs/>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
