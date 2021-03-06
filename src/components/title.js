// create a component
export default function Title (props){
    const width = (props.width !== undefined) ? props.width.toString() : '90%';
    const backgroundStyle =  {
        backgroundColor: '#292929',
        display: 'flex',
        flexDirection: 'column',
        width: width,
        height: 'auto',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    };
    return (
        <div style={backgroundStyle}>
            <h4 style={styles.text}>{props.text}</h4>
        </div>
    );
};

const styles = {
    text: {
        color: '#d1d1d1',
    }
}
