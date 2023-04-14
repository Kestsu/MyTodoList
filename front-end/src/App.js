import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';

import { TaskProvider } from './context/taskContext';

import ItemList from './components/ItemList';
import ItemAdd from './components/ItemAdd';
import TaskReset from "./components/TaskReset";
import Logo from "./components/Logo/logo.jsx";
// import Logo from "./components/jogo/jogo.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <span className="title"><h2>Todo List</h2></span>
        <header className="list-container">
          <div>
            <Switch>
              <TaskProvider>
                <Route exact={true} path="/">
                  <ItemAdd />
                  <ItemList />
                </Route>
                <Route exact={true} path="/debug">
                <TaskReset />
                </Route>
              </TaskProvider>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

