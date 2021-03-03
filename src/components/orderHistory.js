import Title from './title';
import { orderHistoryList} from './dummyData';
import History from './history';
import Text from './text';



// create a component
const orderHistoryElements = [];
// var actualCountryCodes = {

// }
// var listOfCountries = [];
function OrderHistory () {
    orderHistoryList.forEach((item, index) => {
        console.log(index);
        orderHistoryElements.push(
            <History history={item}/>
        )
    })

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
    console.log("Length: " + orderHistoryElements.length)
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
            {orderHistoryElements}

        </div>
    );
};

const styles = {
    headerContainer: {
        width: '95%',
        padding: 5,
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
        paddingTop: 15,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'space-between',
    }
}


//make this component available to the app
export default OrderHistory;
