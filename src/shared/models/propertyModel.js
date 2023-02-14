import noMutate from 'functions/noMutate';
import INIT_PROPERTY from 'shared/static/INIT_PROPERTY';

const PropertyModel = {
    init: () => {
        return {
            ...noMutate(INIT_PROPERTY),
        };
    },
    fromFetched: (payload) => {
        return {
            id: payload.id ?? INIT_PROPERTY.id,
            ownerId: payload.ownerId ?? INIT_PROPERTY.ownerId,
            title: payload.title ?? INIT_PROPERTY.title,
            type: payload.type ?? INIT_PROPERTY.type,
            price: payload.price ?? INIT_PROPERTY.price,
            address: payload.address ?? { ...noMutate(INIT_PROPERTY.address) },
            rating: payload.rating ?? INIT_PROPERTY.rating,
            images: payload.images ?? [...noMutate(INIT_PROPERTY.images)],
            createdAt: payload.createdAt ?? INIT_PROPERTY.createdAt,
            updatedAt: payload.updatedAt ?? INIT_PROPERTY.updatedAt,
            details: payload.details ?? { ...noMutate(INIT_PROPERTY.details) },
            offers: payload.offers ?? { ...noMutate(INIT_PROPERTY.offers) },
            reviews: payload.reviews ?? { ...noMutate(INIT_PROPERTY.reviews) },
            bookings: payload.bookings ?? {
                ...noMutate(INIT_PROPERTY.bookings),
            },
            description: payload.description ?? INIT_PROPERTY.description,
            isEdited: payload.isEdited ?? INIT_PROPERTY.isEdited,
        };
    },
};

export default PropertyModel;
