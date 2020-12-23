import React,{useState,useEffect} from 'react'
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core'
import '../App.css'
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import { sortData } from '../util'
import LineGraph from './Linegraph'
import "leaflet/dist/leaflet.css";


//  https://disease.sh/v3/covid-19/countries
//  https://disease.sh/v3/covid-19/countries/[country code]
// https://disease.sh/v3/covid-19/all

function Home() {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')
    const [countryInfo, setCountryInfo] = useState({})
    const [tableData, setTableData] = useState([])
    const [mapCenter, setMapCenter] = useState({lat:34.80746,lng:-40.4796})
    const[mapZoom,setMapZoom] = useState(3)
    const [mapCountries,setMapCountries] = useState([])

    useEffect(()=>{
        fetch(" https://disease.sh/v3/covid-19/all")
        .then(response=>response.json())
        .then(data=>{
            setCountryInfo(data)
            setCountry('worldwide')
        })
    },[])

   

    useEffect(() => {
       const getCountriesData = async () => {
           await fetch(" https://disease.sh/v3/covid-19/countries")
           .then((response)=> response.json())
           .then((data)=>{
            const countries = data.map((country)=>({
                name: country.country,
                value: country.countryInfo.iso2
            }))

            const sortedData = sortData(data)
            setTableData(sortedData);
            setCountries(countries)
            setMapCountries(data)
           })
       }
       getCountriesData()
    }, [])

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode)

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
        setCountry(countryCode)
        setCountryInfo(data)
        setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4)
    })
    
    }
    console.log(countryInfo)
    return (
        <div className='app'>
            <div className="app_left">
            <div className="app_header">
                <div className='stat_heading'>
                <h1>CORONAVIRUS LIVE STATS</h1>
                </div>
           
            <FormControl className="app_dropdown">
                <Select className='select' value={country} onChange={onCountryChange}>
                <MenuItem class='menuitem' value="worldwide">Worldwide</MenuItem>
                {countries.map((country)=>(
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>
           
           <div className="app_stats">
            
                    <InfoBox className='infoBox' title="Cases" cases={countryInfo.todayCases}total={countryInfo.cases} />
                    <InfoBox  className='infoBox'title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                    <InfoBox className='infoBox' title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
             
                  
           </div>

           <Map
            center={mapCenter}
           zoom={mapZoom}
           countries={mapCountries}/>

            </div>

            <Card className="app_right" style={{backgroundColor: "white"}}>
                <CardContent>
                    <h3>LIVE CASES BY COUNTRIES</h3>
                    <Table countries={tableData}/>
                    <h3 className='projection'>PROJECTION OF NEW CASES</h3>
                    <LineGraph/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home
