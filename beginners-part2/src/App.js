import {
  BrowserRouter as Router,
  //Swich
  Route,
  Switch
} from "react-router-dom"
import SimpleSlider from "./routes/Test";

function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <SimpleSlider />
      </Route>
    </Switch>
  </Router>
}

export default App;