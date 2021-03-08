import Text from './text';


// create a component
function History (props) {
    var data = props.history.data + "GB";
    return (
        <div style ={styles.container}>
            <div style={styles.purchaseDiv}>
                <Text text={props.history.date} color="#d4d3d3" style_="normal" size={20}/>
            </div>
            <div style={styles.dataDiv}>
                <Text text={data} color="#d4d3d3" style_="normal" size={20}/>
            </div>
            <div style={styles.transIDDiv}>
                <Text text={props.history.transID} color="#d4d3d3" style_="normal" size={20}/>
            </div>



        </div>
    );
};

const styles = {
    container: {
        width: '95%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    purchaseDiv: {
        width: '50%',
        alignItems: 'left',
    },
    dataDiv:{
        width: '20%',
        alignItems: 'left',
    },
    transIDDiv: {
        width: '30%',
        alignItems: 'left',
    },
}


//make this component available to the app
export default History;
