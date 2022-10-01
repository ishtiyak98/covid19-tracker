import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Logo from "./coronavirus_logo-2.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("global");

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleCountryChange = (country) => {
    setCountryName(country);
    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    .then(res => res.json())
    .then(data => {
      setCountry(data);
      setData(data);
    });
  };

  console.log(data);

  return (
    <main className={styles.container}>
      <img src={Logo} alt="" width={300} style={{marginTop: "20px"}}/>
      <Cards data={data}></Cards>
      <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
      <Chart country={country} countryName={countryName}></Chart>
    </main>
  );
}

export default App;
