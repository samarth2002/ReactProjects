import './stlying/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Home from './pages/Home';
import Chat from './pages/Chat'
import {useState} from "react" 
import Login from './pages/Login';
import { useStateValue } from './StateProvider';

function App() {

  const [user, setUser] = useState(null)
  const [state, dispatch] =  useStateValue()

  return (
    <div className = "app">
      <Router>
        {!state.user?( <Login /> ):
        (
          <>
          <Header />
          <div className="app-body">
          <Sidebar />

          <Routes>
            {/* <Route path = "/room/:roomId">
              <h1>CHAT SCREEN</h1>

            </Route> */}
            <Route path = "/" element = {<Home />}>
            
            </Route>
            <Route path="/room/:roomId" element={<Chat />} />

          </Routes>

        </div>
        </>
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
