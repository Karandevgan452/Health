import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1>Hello Tester</h1>
    </>
  );
};

export default App;
