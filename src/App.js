import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Logo from "./coronavirus_logo-2.png";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("global");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f797e919b6msh49a1a47246f3e22p1f3965jsn377a953987cf",
      "X-RapidAPI-Host": "covid-19-tracking.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://covid-19-tracking.p.rapidapi.com/v1", options)
      .then((response) => response.json())
      .then((data) => setData(data[0]));
  }, []);

  console.log("data: ", data);

  const handleCountryChange = (country) => {
    setCountryName(country);
    fetch(`https://covid-19-tracking.p.rapidapi.com/v1/${country}`, options)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  };

  console.log("country: ", country);

  return (
    <main className={styles.container}>
      <img src={Logo} alt="" width={300} style={{ marginTop: "20px" }} />
      <Cards data={data}></Cards>
      <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
      <Chart country={country} countryName={countryName}></Chart>
    </main>
  );
}

export default App;
