import React from 'react'
import '../Css/api.css'

function Api() {
    return (
        <div className='api'>
            <p class='heading'>The Api requests are made from <a target='blank'href='https://disease.sh/'>disease.sh</a></p>

            <p className='item'>Worldwide data: <a target='blank' href=' https://disease.sh/v3/covid-19/all'>https://disease.sh/v3/covid-19/all</a></p>

             <p className='item'>List of Countries: <a target='blank' href='https://disease.sh/v3/covid-19/countries'>https://disease.sh/v3/covid-19/countries</a></p>

             

             <p className='item'>Country data: <a target='blank' href='https://disease.sh/v3/covid-19/countries/[country code here]'>https://disease.sh/v3/covid-19/countries/[country code here]</a></p>
        </div>
    )
}

export default Api
