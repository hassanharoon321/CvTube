import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../NavBar/Pages/Home";
import { About } from "../NavBar/Pages/About";
import { Blog } from "../NavBar/Pages/Blog";
import { Contact } from "../NavBar/Pages/Contact";
import NavBar from "../NavBar/NavBar";
import CoverImage from "../Cover/CoverImage";
import Footer from "../Footer/Footer";

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
          <CoverImage />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
