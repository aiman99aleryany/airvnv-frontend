import noMutate from 'utils/functions/noMutate';

class Fields {
    #id = '';
    #ownerId = '';
    #title = '';
    #type = '';
    #price = 0;
    #address = {};
    #rating = 0;
    #images = [];
    #createdAt = '';
    #updatedAt = '';
    #details = [];
    #offers = [];
    #reviews = [];
    #bookings = [];
    #description = '';
    #isEdited = false;

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#id = payload.id ?? this.#id;
        this.#ownerId = payload.ownerId ?? this.#ownerId;
        this.#title = payload.title ?? this.#title;
        this.#type = payload.type ?? this.#type;
        this.#price = payload.price ?? this.#price;
        this.#address = { ...noMutate(payload.address) } ?? this.#address;
        this.#rating = payload.rating ?? this.#rating;
        this.#images = [...noMutate(payload.images)] ?? this.#images;
        this.#createdAt = payload.createdAt ?? this.#createdAt;
        this.#updatedAt = payload.updatedAt ?? this.#updatedAt;
        this.#details = [...noMutate(payload.details)] ?? this.#details;
        this.#offers = [...noMutate(payload.offers)] ?? this.#offers;
        this.#reviews = [...noMutate(payload.reviews)] ?? this.#reviews;
        this.#bookings = [...noMutate(payload.bookings)] ?? this.#bookings;
        this.#description = payload.description ?? this.#description;
        this.#isEdited = payload.isEdited ?? this.#isEdited;
    }

    get id() {
        return this.#id;
    }

    set id(newId) {
        this.#id = newId;
    }

    get ownerId() {
        return this.#ownerId;
    }

    set ownerId(newOwnerId) {
        this.#ownerId = newOwnerId;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    get type() {
        return this.#type;
    }

    set type(newType) {
        this.#type = newType;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    get address() {
        return this.#address;
    }

    set address(newAddress) {
        this.#address = { ...noMutate(newAddress) };
    }

    get rating() {
        return this.#rating;
    }

    set rating(newRating) {
        this.#rating = newRating;
    }

    get images() {
        return this.#images;
    }

    set images(newImages) {
        this.#images = { ...noMutate(newImages) };
    }

    get createdAt() {
        return this.#createdAt;
    }

    set createdAt(newCreatedAt) {
        this.#createdAt = newCreatedAt;
    }

    get updatedAt() {
        return this.#updatedAt;
    }

    set updatedAt(newUpdatedAt) {
        this.#updatedAt = newUpdatedAt;
    }

    get details() {
        return this.#details;
    }

    set details(newDetails) {
        this.#details = { ...noMutate(newDetails) };
    }

    get offers() {
        return this.#offers;
    }

    set offers(newOffers) {
        this.#offers = { ...noMutate(newOffers) };
    }

    get reviews() {
        return this.#reviews;
    }

    set reviews(newReviews) {
        this.#reviews = { ...noMutate(newReviews) };
    }

    get bookings() {
        return this.#bookings;
    }

    set bookings(newBookings) {
        this.#bookings = { ...noMutate(newBookings) };
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    get isEdited() {
        return this.#isEdited;
    }

    set isEdited(newIsEdited) {
        this.#isEdited = newIsEdited;
    }
}

export default Fields;
