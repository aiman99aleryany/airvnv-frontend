import PropertyFields from './PropertyFields';

class Property {
    #fields = new PropertyFields();

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#fields = new PropertyFields(payload.fields);
    }

    get fields() {
        return this.#fields;
    }

    set fields(newFields) {
        this.#fields = new PropertyFields(newFields);
    }
}

export default Property;
