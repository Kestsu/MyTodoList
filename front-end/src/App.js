import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { TaskProvider } from "./context/taskContext";

import ItemList from "./components/ItemList";
import ItemAdd from "./components/ItemAdd";
import TaskReset from "./components/TaskReset";
import Logo from "./components/Logo/logo.jsx";
import ButtonLightDark from "./components/ButtonLightDark";

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <header>
          <ButtonLightDark />
          <span className="title">
            <h2>Todo List</h2>
          </span>
        </header>
        <main className="list-container">
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
        </main>
      </div>
    </Router>
  );
}

export default App;
