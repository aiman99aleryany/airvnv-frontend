import Fields from './Fields';
import INIT_FIELDS from '../constants/INIT_FIELDS';

class Property {
    #fields = new Fields(INIT_FIELDS);

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#fields = new Fields(payload.fields);
    }

    get fields() {
        return this.#fields;
    }

    set fields(newFields) {
        this.#fields = new Fields(newFields);
    }
}

export default Property;
