import noMutate from 'utils/functions/noMutate';
import INIT_FIELDS from '../constants/INIT_FIELDS';

class Property {
    #fields = { ...noMutate(INIT_FIELDS) };

    constructor(payload = null) {
        if (!payload || Object.keys(payload).length <= 0) return;
        this.#fields.id = payload.fields?.id ?? this.fields.id;
        this.#fields.ownerId = payload.fields?.ownerId ?? this.fields.ownerId;
        this.#fields.title = payload.fields?.title ?? this.fields.title;
        this.#fields.type = payload.fields?.type ?? this.fields.type;
        this.#fields.price = payload.fields?.price ?? this.fields.price;
        this.#fields.address = payload.fields?.address ?? this.fields.address;
        this.#fields.rating = payload.fields?.rating ?? this.fields.rating;
        this.#fields.images = payload.fields?.images ?? this.fields.images;
        this.#fields.createdAt =
            payload.fields.createdAt ?? this.fields.createdAt;
        this.#fields.updatedAt =
            payload.fields.updatedAt ?? this.fields.updatedAt;
        this.#fields.details = payload.fields.details ?? this.fields.details;
        this.#fields.offers = payload.fields.offers ?? this.fields.offers;
        this.#fields.reviews = payload.fields.reviews ?? this.fields.reviews;
        this.#fields.bookings = payload.fields.bookings ?? this.fields.bookings;
        this.#fields.description =
            payload.fields.description ?? this.fields.description;
        this.#fields.isEdited = payload.fields.isEdited ?? this.fields.isEdited;
    }

    set fields(newFields) {
        this.#fields = { ...noMutate(newFields) };
    }

    get id() {
        return this.#fields.id;
    }

    get ownerId() {
        return this.#fields.owenerId;
    }

    get title() {
        return this.#fields.title;
    }

    get type() {
        return this.#fields.type;
    }

    get price() {
        return this.#fields.price;
    }

    get address() {
        return this.#fields.address;
    }

    get rating() {
        return this.#fields.rating;
    }

    get images() {
        return this.#fields.images;
    }

    get createdAt() {
        return this.#fields.createdAt;
    }

    get updatedAt() {
        return this.#fields.updatedAt;
    }

    get details() {
        return this.#fields.details;
    }

    get offers() {
        return this.#fields.offers;
    }

    get reviews() {
        return this.#fields.reviews;
    }

    get bookings() {
        return this.#fields.bookings;
    }

    get description() {
        return this.#fields.description;
    }

    get isEdited() {
        return this.#fields.isEdited;
    }
}

export default Property;
