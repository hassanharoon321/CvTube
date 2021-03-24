import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/NavBar/Pages/Home";
import { About } from "./components/NavBar/Pages/About";
import { Blog } from "./components/NavBar/Pages/Blog";
import { Contact } from "./components/NavBar/Pages/Contact";
import NavBar from "./components/NavBar/NavBar";
import ForgetAlert from "./components/ForgetAlert/ForgetAlert.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      <ForgetAlert/>
    </div>
  );
}

export default App;
