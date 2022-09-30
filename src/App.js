import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <main className={styles.container}>
      <Cards data={data}></Cards>
      <CountryPicker></CountryPicker>
      <Chart></Chart>
    </main>
  );
}

export default App;
