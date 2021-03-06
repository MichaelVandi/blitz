import React, { useState, useEffect } from 'react';
import Title from './title';
import { orderHistoryList, countries, countryInfo} from './dummyData';
import History from './history';
import Text from './text';

const orderHistoryElements = [];
// var actualCountryCodes = {

// }
// var listOfCountries = [];
const stickyCountries = [];
function OrderHistory (props) {
    
    // orderHistoryList.forEach((item, index) => {
    //     console.log("order history" + index);
    //     // orderHistoryElements.push(
    //     //     <History key={index} history={item}/>
    //     // )
    // })
    // countries.forEach((item, index) => {
    //     if (countryInfo[item].stickyUrl != null) {
    //         // Add that country to sticky countries
    //         stickyCountries.push(item.toString());
    //     }
    // })
    // console.log(stickyCountries.toString());


    // samplePoints.forEach((item, index) => {
    //     actualCountryCodes[item.CountryName.toString()] = {
    //         countryName: item.CountryName.toString(),
    //         entryPoint: item.EntryPoint,
    //         port: item.Port,
    //         completeUrl: item.PointPort,
    //     }
    //     listOfCountries.push(item.CountryName.toString());
    // });
    // Sort the list of countries
    // listOfCountries.sort();
    // Print
    // console.log(JSON.stringify(actualCountryCodes));
    // console.log(listOfCountries.toString());
    // console.log(listOfCountries);
    // console.log("Length: " + orderHistoryElements.length)
    return (
        <div style ={styles.container}>
            <Title text="Order History"/>
            <div style={styles.headerContainer}>
                <div>   
                    <Text text="Date Purchased" color="#9f9292" style_="bold" size={18} weight="bold"/>
                </div>
                
                <div>
                    <Text text="Data" color="#9f9292" style_="bold" size={18} weight="bold"/>
                </div>
                <div>
                    <Text text="Trans. ID" color="#9f9292" style_="bold" size={18} weight="bold"/>
                </div>
            </div>
            <div style={styles.historyContainer}>
                {props.historyList}
            </div>
            

        </div>
    );
};

const styles = {
    headerContainer: {
        width: '95%',
        padding: 5,
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    internalDiv: {
        width: '33%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flexStart',
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 15,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
    }, historyContainer: {
        width: '100%',
        height: '99%',
        display: 'flex',
        // border: '1px solid yellow',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        // justifyContent: 'space-between',
    }
}


//make this component available to the app
export default OrderHistory;
