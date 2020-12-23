import React from 'react'
import {Card, CardContent} from '@material-ui/core'
import '../Css/infobox.css'

function InfoBox({title,cases,total}) {
    return (
        <div>
            <Card className='infoBox'>
                <CardContent>
                    <h3>
                        {title}
                    </h3>
                    <div className='new'>
                    <p className="infoBox_cases">{cases}</p><p>+</p>
                    </div>
                  
                    <p className="infoBox_total" color='textSecondary'>
                        {total} Total
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
