import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`);
      });
  }, []);
  useEffect(() => {
    fetch("/api/cities")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const cityNames = result.map((city) => city.name).join(", ");
        alert(`City ${cityNames}!`);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching cities.");
      });
  }, []);

  return (
    <>
      <h1>Fullstack-ish Test Project</h1>
      <div className='card'></div>
    </>
  );
}

export default App;
