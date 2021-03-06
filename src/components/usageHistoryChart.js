import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import Title from './title';


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
            <div style={styles.titleContainer}>
              <Title text="Usage History" width='50%' />
            </div>
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
    },
    titleContainer: {
      paddingLeft: 25,
      width: '100%',
      justifyContent: 'left',
      alignItems: 'flex-start',
    }
}


export default UsageHistoryChart