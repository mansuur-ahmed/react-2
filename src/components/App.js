import React from "react";

import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
