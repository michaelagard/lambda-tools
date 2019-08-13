import Home from './components/Home/Home';
import Randomizer from './components/Randomizer/Randomizer';
import StudentCTA from './components/StudentCTA/StudentCTA';
import Sidebar from './components/Sidebar/Sidebar';
import React from "react";
// import './css/App.css';
import './css/css-reset.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Wrapper, RightContainer} from './App.styled';

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar/>
        <RightContainer>
          <Route exact path="/" component={Home} />
          <Route exact path="/random" component={Randomizer} />
          <Route exact path="/studentcta" component={StudentCTA} />
        </RightContainer>
      </Wrapper>
    </Router>
  );
}

export default App;
