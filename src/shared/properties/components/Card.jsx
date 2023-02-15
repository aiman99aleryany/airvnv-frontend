// this component will hold the information of each property
function Card(props) {
    return (
        <div className="card">
            <div>{props.property.id}</div>
            <div>{props.property.owenerId}</div>
            <div>{props.property.title}</div>
            <div>{props.property.type}</div>
            <div>{props.property.price}</div>
        </div>
    );
}

export default Card;
