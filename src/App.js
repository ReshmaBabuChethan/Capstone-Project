import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import ListDisplay from './pages/home/ListDisplay'
import AddStudent from './pages/home/AddStudent'
import UpdateStudent from './pages/home/UpdateStudent'

import { useCollection } from './hooks/useCollection'

function App() {
  const { authIsReady, user } = useAuthContext()
  //  const { documents, error } = useCollection(
    //'students', ["uid", "==", user.uid], ['createdAt', 'desc']
 // )
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
              {/*{user && !documents && <AddStudent/>}
              {user && documents && <UpdateStudent/>}*/}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/listdisplay">
            {user && user.displayName && <Redirect to="/listdisplay" />}
              {!user && <Signup />}
           
          </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App