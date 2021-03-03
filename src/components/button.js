function Button (props) {
    var color = props.color === "red" ? '#9d0b0b' : '#0c9e36';
    const buttonStyle = {
        width: props.width,
        backgroundColor: color,
        color: 'white',
        border: 'none',
        borderRadius: 30,
        padding: 5,
        fontSize: props.fontSize,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
    }
    const onClick = () => {
        props.onClick();
    }
    return (
        <button onClick={onClick} style={buttonStyle}>{props.text}</button>
    );
};



//make this component available to the app
export default Button;
