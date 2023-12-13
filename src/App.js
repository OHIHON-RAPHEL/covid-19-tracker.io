import {useState, useEffect} from "react"
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import InfoBox from './InfoBox';
import Map from './Map';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        setCountries(countries);
      });
    };

    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("Yoooo", countryCode);
    setCountry(countryCode)
  }

  return (
    <div className='flex justify-evenly p-5'>
      <div className='app__left'>
        <div className='flex justify-between items-center my-5'>
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="outlined">Worldwide</MenuItem>
              {countries.map((country) => {
                  return <MenuItem value={country.value}>{country.name}</MenuItem>
                })}
            </Select>
          </FormControl>
        </div>

        <div className='flex justify-between'>
          <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
          <InfoBox title="Recovered" cases={1234} total={3000} />
          <InfoBox title="Deaths" cases={12345} total={4000} />
        </div>

        <Map/>
      </div>
      <Card className='app__right'>
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
