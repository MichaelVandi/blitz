import Text from './text';


// create a component
function History (props) {
    var data = props.history.data + "GB";
    return (
        <div style ={styles.container}>
            <Text text={props.history.date} color="#d4d3d3" style_="normal" size={20}/>
            <Text text={data} color="#d4d3d3" style_="normal" size={20}/>
            <Text text={props.history.transID} color="#d4d3d3" style_="normal" size={20}/>
        </div>
    );
};

const styles = {
    container: {
        width: '95%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // justifyContent: 'space-between',
    }
}


//make this component available to the app
export default History;
