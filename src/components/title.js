// create a component
export default function Title (props){
    return (
        <div style={styles.background}>
            <h4 style={styles.text}>{props.text}</h4>
        </div>
    );
};

const styles = {
    background: {
        backgroundColor: '#292929',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: 'auto',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#d1d1d1',
    }
}
