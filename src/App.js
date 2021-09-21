import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./Redux/Actions/action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Welcome!</h1>
    </div>
  );
}

export default App;
