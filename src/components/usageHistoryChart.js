import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function UsageHistoryChart(props) {
    return (
        <div style={styles.container}>
            <Line height={110} width={300} data={props.data} options={options} />  
        </div>

    )
}

const styles = {
    container: {
        width: '100%',
        paddingTop: 15,
        marginHorizontal: 15,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
    }
}


export default UsageHistoryChart