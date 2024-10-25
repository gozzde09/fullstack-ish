import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]); // Lagra städerna i ett state istället för att använda alert

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(`Hello ${result.hello}!`); // Använd console.log för testsyfte istället för alert
      });
  }, []);

  useEffect(() => {
    fetch("/api/cities")
      .then((response) => response.json())
      .then((result) => {
        setCities(result); // Spara städerna i state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Fullstack-ish Test Project</h1>
      <div className='card'>
        <h2>Städer</h2>
        <ul>
          {cities.length > 0 ? (
            cities.map((city, index) => (
              <li key={index}>{city.name}</li> // Rendera stadens namn i en lista
            ))
          ) : (
            <p>Laddar städer...</p> // Visas medan data laddas
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
