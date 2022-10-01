import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Logo from "./coronavirus_logo-2.png";
import Swal from "sweetalert2";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("global");
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_apiKey}`,
      'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
    },
  };

  useEffect(() => {
    fetch("https://covid-19-tracking.p.rapidapi.com/v1", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          Swal.fire({
            icon: "error",
            title: "Only five requests per minute",
            text: data.message,
          });
        } else {
          setData(data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("data: ", data);

  const handleCountryChange = (country) => {
    setCountryName(country);
    fetch(`https://covid-19-tracking.p.rapidapi.com/v1/${country}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          Swal.fire({
            icon: "error",
            title: "Only five requests per minute",
            text: data.message,
          });
        } else {
          setCountry(data);
          setData(data);
        }
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
