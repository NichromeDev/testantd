import React, {useState} from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.scss";
import { Input, Checkbox } from "antd";
import { ThemeProvider } from "@material-ui/core/styles";

const { Search } = Input;

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
};

function App() {
  const [state, setState] = useState(200);
  const handleClick = () => {
    if (state === 40) setState(200);
    else setState(40);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeProvider theme={theme}></ThemeProvider>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
          style={{ width: 0, borderRadius: 4, boxShadow: "none" }}
        />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          onClick={handleClick}
          style={{ width: {state}, borderRadius: 4 }}
        />
        <Checkbox.Group>
          <Checkbox value="A" style={{ lineHeight: "32px" }}>
            A
          </Checkbox>
          <Checkbox value="B" style={{ lineHeight: "32px" }} disabled>
            B
          </Checkbox>
          <Checkbox value="C" style={{ lineHeight: "32px" }}>
            C
          </Checkbox>
          <Checkbox value="D" style={{ lineHeight: "32px" }}>
            D
          </Checkbox>
          <Checkbox value="E" style={{ lineHeight: "32px" }}>
            E
          </Checkbox>

          <Checkbox value="F" style={{ lineHeight: "32px" }}>
            F
          </Checkbox>
        </Checkbox.Group>
      </header>
    </div>
  );
}

export default App;
