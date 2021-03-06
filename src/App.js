import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopUp from './components/topUp';
import OrderHistory from './components/orderHistory';
import UsageHistoryChart from './components/usageHistoryChart';
import GenerateProxies from './components/generateProxies';
import UsageProgressCircle from './components/usageProgressCircle';
import History from './components/history';
import { orderHistoryList } from './components/dummyData'

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3, 5, 7, 8, 6, 6, 10],
      fill: false,
      backgroundColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(192,31,47,1)',
    },
  ],
}



function App() {
  // Two columns
  const historyList = [];
  // Get order history list
  orderHistoryList.forEach((item, index) => {
    console.log("I am doing");
    historyList.push(<History history={item} key={index}/>)
  })
  return (
    <div style={styles.background}>
      {/* Main Dashboard components */}
      
      <div>
        <Container fluid={true}>

          <div style={styles.container}>

            <Row className='justify-content-md-center'>
              {/* Progress circle goes here */}
              <Col md={3}>
                <div style={styles.progressCircleBackground}>
                    <UsageProgressCircle
                      progress={50}
                      size={200}
                      strokeWidth={15}
                      circleOneStroke="rgba(18,19,20,1)"
                      circleTwoStroke="rgba(176,14,14,1)"
                    />

                </div>

              </Col>

              {/* Usage History Goes Here */}
              <Col md={6}>
                <div style={styles.componentBackground}>
                  <UsageHistoryChart data={chartData}/>

                </div>


              </Col>

              {/* Top up data goes here */}
              <Col md={3}>
                <div style={styles.componentBackground}>
                  <TopUp/>

                </div>

              </Col>
            </Row>

            <Row className='justify-content-md-center'>
              {/* Generate Proxies goes here */}
              <Col md={9}>
                <div style={styles.componentBackground}>      
                  <GenerateProxies/>
                </div>

              </Col>

              {/* Order History Goes here */}
              <Col md={3}>
                <div style={styles.componentBackground}>
                  <OrderHistory historyList={historyList}/>

                </div>

              </Col>

            </Row>

          </div>


        </Container>



      </div>


      {/* Footer / header / Menu */}
     


    </div>
  );
}

const styles = {
  background: {
    backgroundColor: '#04060c',
    height: '100vh',
    width: '100%',
  },
  container: {
    backgroundColor: '#04060c',
    padding: 10,
  },
  componentBackground: {
    backgroundColor: 'rgba(18,19,20,1)', // TODO: Adjust opacity
    borderRadius: 25,
    marginTop: 25,
    width: '100%',
    height: '40vh',
  },
  progressCircleBackground: {
    marginTop: 25,
    paddingTop: 10,
    width: '100%',
    height: '40vh',
  },
  componentBackgroundHorizontal: {
    backgroundColor: 'rgba(18,19,20,1)', // TODO: Adjust opacity
    borderRadius: 25,
    marginTop: 25,
    width: '100%',
    height: '40vh',
    display: 'flex',
    flexDirection: 'row',
  },
  menu: {
    width: '100%',
    backgroundColor: 'rgba(18,19,20,1)',
    position: 'fixed',
    bottom: 0,
    height: '8vh',
  }
}
export default App;
