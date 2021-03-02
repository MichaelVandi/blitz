import Title from './title';


// create a component
function TopUp () {
    return (
        <div style ={styles.container}>
            <Title text="Top Up Data"/>
            <h1>Samples</h1>

        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'space-between',
    }
}


//make this component available to the app
export default TopUp;
