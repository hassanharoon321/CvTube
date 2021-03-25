import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Navbar/Pages/Home";
import { About } from "../Navbar/Pages/About";
import { Blog } from "../Navbar/Pages/Blog";
import { Contact } from "../Navbar/Pages/Contact";
import NavBar from "../Navbar/NavBar";
import PolicyText from "../Policy-Text/PolicyText";
import Footer from "../Footer/Footer";

function PrivacyPolicy() {
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
          <PolicyText />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default PrivacyPolicy;
