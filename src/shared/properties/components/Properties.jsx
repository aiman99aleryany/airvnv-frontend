import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Card from './Card';
import useProperties from '../stores/useProperties';
import { useLoaderData } from 'react-router-dom';
import PropertiesCollection from '../models/PropertiesCollection';

import './Properties.scss';

function Properties() {
    const fetchedProperties = useLoaderData();
    const properties = useProperties((state) => state.properties);
    const updateProperties = useProperties((state) => state.updateProperties);

    useEffect(() => {
        const newPropertiesCollection = new PropertiesCollection(
            fetchedProperties
        );
        updateProperties(newPropertiesCollection.properties);
    }, [updateProperties, fetchedProperties]);

    console.log(properties);
    return (
        <section className="properties">
            section:
            {properties.map((property) => (
                <Card property={property} key={nanoid()} />
            ))}
        </section>
    );
}

export default Properties;
