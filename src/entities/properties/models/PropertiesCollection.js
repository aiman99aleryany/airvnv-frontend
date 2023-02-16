import Property from './property';

class PropertiesCollection {
    #properties = [];

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#properties = payload.map((property) => {
            if (property instanceof Property) return property;
            else return 'no Property';
        });
    }

    get properties() {
        return this.#properties;
    }
}

export default PropertiesCollection;
