// this component will hold the information of each property
function Card({ property }) {
    return (
        <div className="card">
            <div>
                <h2>ID</h2>
                <div>{property.fields.id}</div>
            </div>

            <div>
                <h2>OwnerId</h2>
                <div>{property.fields.ownerId}</div>
            </div>

            <div>
                <h2>Title:</h2>
                <div>{property.fields.title}</div>
            </div>

            <div>
                <h2>Type:</h2>
                <div>{property.fields.type}</div>
            </div>

            <div>
                <h2>Price:</h2>
                <div>{property.fields.price}</div>
            </div>

            <div>
                <h2>rating:</h2>
                <div>{property.fields.rating}</div>
            </div>
        </div>
    );
}

export default Card;
