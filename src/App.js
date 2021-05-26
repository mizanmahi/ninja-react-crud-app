import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav";
import Homepage from "./components/homepage";
import CreateForm from "./components/create-form";
import PostDetails from "./components/post-details";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />
            <Switch>
               <Route exact path="/">
                  <Homepage />
               </Route>
               <Route exact path="/create">
                  <CreateForm />
               </Route>
               <Route exact path="/post/:id">
                  <PostDetails/>
               </Route>
               <Route exact path="*">
                  <h1 style={{
                    textAlign: "center",
                  }} className="text-danger">Sorry that page can not be found!</h1>
                  <Link className="btn btn-primary" style={{
                    display: "block",
                    margin: "0 auto"
                  }} to="/">Go Home</Link>
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
