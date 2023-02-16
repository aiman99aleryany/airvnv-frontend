import UserFields from './UserFields';

class User {
    #fields = new UserFields();

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#fields = new UserFields(payload.fields);
    }

    get fields() {
        return this.#fields;
    }

    set fields(newFields) {
        this.#fields = newFields;
    }
}

export default User;
