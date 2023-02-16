import Property from './Property';

class PropertiesCollection {
    #properties = [];

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#properties = payload.map((property) => {
            return new Property(property);
        });
    }

    get properties() {
        return this.#properties;
    }
}

export default PropertiesCollection;
