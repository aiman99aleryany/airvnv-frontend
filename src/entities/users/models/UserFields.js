class UserFields {
    #id = '';
    #username = '';
    #email = '';
    #password = '';
    #firstName = '';
    #lastName = '';
    #birthDate = '';
    #age = 0;
    #sex = '';
    #notifications = [];
    #properties = [];
    #bookings = [];
    #profilePicture = '';
    #lastSeen = '';
    #isSignedIn = false;
    #isEdited = false;

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#id = payload.id ?? this.#id;
        this.#username = payload.username ?? this.#username;
        this.#email = payload.email ?? this.#email;
        this.#password = payload.password ?? this.#password;
        this.#firstName = payload.firstName ?? this.#firstName;
        this.#lastName = payload.lastName ?? this.#lastName;
        this.#birthDate = payload.birthDate ?? this.#birthDate;
        this.#age = payload.age ?? this.#age;
        this.#sex = payload.sex ?? this.#sex;
        this.#notifications = payload.notifications ?? this.#notifications;
        this.#properties = payload.properties ?? this.#properties;
        this.#bookings = payload.bookings ?? this.#bookings;
        this.#profilePicture = payload.profilePicture ?? this.#profilePicture;
        this.#lastSeen = payload.lastSeen ?? this.#lastSeen;
        this.#isSignedIn = payload.isSignedIn ?? this.#isSignedIn;
        this.#isEdited = payload.isEdited ?? this.#isEdited;
    }
}

export default UserFields;
