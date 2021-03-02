// create a component
export default function Text (props){
    const style_ = {
        fontSize: props.size,
        fontStyle: props.style_,
        fontWeight: props.weight,
        color: props.color,
    }
    return (
        <p style={style_}>{props.text}</p>
    );
};