import React from 'react'
import '../Css/Table.css'

function Table({countries}) {
    return (
        <div className='table'>
            {countries.map(({country,cases})=>(
                <tr>
                    <td><strong>{country}</strong></td>
                    <td>{cases}</td>
                </tr>
            ))}
        </div>
    )
}

export default Table
