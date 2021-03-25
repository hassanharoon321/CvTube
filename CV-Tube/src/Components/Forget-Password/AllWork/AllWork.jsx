import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../NavBar/Pages/Home";
import { About } from "../NavBar/Pages/About";
import { Blog } from "../NavBar/Pages/Blog";
import { Contact } from "../NavBar/Pages/Contact";
import NavBar from "../NavBar/NavBar";
import ForgetAlert from "../ForgetAlert/ForgetAlert";

function ForgetPassword() {
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

export default ForgetPassword;
