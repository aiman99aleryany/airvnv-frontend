import { nanoid } from 'nanoid';
import Property from 'shared/properties/models/property';

const property1 = new Property();
const property2 = new Property();
const property3 = new Property();
const property4 = new Property();
const property5 = new Property();
const property6 = new Property();
const property7 = new Property();
const property8 = new Property();

property1.fields = {
    id: nanoid(),
    ownerId: '1',
    title: 'Ibiza House',
    type: 'house',
    price: 500,
    address: {
        city: 'Ibiza',
        country: 'Spain',
    },
    rating: 5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336165_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/03/25',
    endDate: '2023/03/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The roof is high, triangular and layered and is covered with grey ceramic tiles. Two small chimneys sit at the side of the house. Several small windows let in just enough light to the rooms below the roof. The house itself is surrounded by a gorgeous garden with many hidden lights that make the garden come to life at night.',
    isEdited: false,
};

property2.fields = {
    id: nanoid(),
    ownerId: '2',
    title: 'Berlin House',
    type: 'house',
    price: 250,
    address: {
        city: 'Berlin',
        country: 'Germany',
    },
    rating: 4.5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2017/09/16/17/27/architecture-2756145_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389258_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/03/25',
    endDate: '2023/03/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property3.fields = {
    id: nanoid(),
    ownerId: '3',
    title: 'Geno House',
    type: 'house',
    price: 350,
    address: {
        city: 'New York',
        country: 'United States',
    },
    rating: 3.5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2016/08/03/19/22/carriacou-1567544_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2016/11/14/02/28/apartment-1822409_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2015/12/05/23/22/bedroom-1078890_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property4.fields = {
    id: nanoid(),
    ownerId: '4',
    title: 'bramo House',
    type: 'house',
    price: 350,
    address: {
        city: 'London',
        country: 'United Kingdom',
    },
    rating: 3.5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/luxury-villas-1737167_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2015/03/12/14/23/bedroom-670249_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2016/01/13/14/01/bedroom-1137939_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2016/08/07/00/44/bed-1575491_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property5.fields = {
    id: nanoid(),
    ownerId: '4',
    title: 'Milan House',
    type: 'house',
    price: 350,
    address: {
        city: 'Milan',
        country: 'Italy',
    },
    rating: 4.9,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2016/11/18/14/25/bed-1834916_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2014/07/31/00/40/bedroom-405920_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2014/09/25/18/05/bedroom-460762_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg',
        },
    ],

    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property6.fields = {
    id: nanoid(),
    ownerId: '4',
    title: 'Melbourne house',
    type: 'house',
    price: 730,
    address: {
        city: 'Melbourne',
        country: 'Australia',
    },
    rating: 5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2019/11/05/18/21/lifestyle-4604173_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148891_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2018/08/18/23/02/bathroom-3615667_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property7.fields = {
    id: nanoid(),
    ownerId: '4',
    title: 'Palermo flat',
    type: 'flat',
    price: 120,
    address: {
        city: 'Palermo',
        country: 'Italy',
    },
    rating: 4.5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389259_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2018/08/18/23/02/bathroom-3615667_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
};

property8.fields = {
    id: nanoid(),
    ownerId: '5',
    title: 'Romania cabin',
    type: 'cabin',
    price: 40,
    location: {
        city: 'Bucharest',
        country: 'Romania',
    },
    rating: 5,
    images: [
        {
            sequence: '1',
            url: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
        },
        {
            sequence: '2',
            url: 'https://cdn.pixabay.com/photo/2013/03/23/04/29/master-bedroom-96086_960_720.jpg',
        },
        {
            sequence: '3',
            url: 'https://cdn.pixabay.com/photo/2013/07/04/18/33/western-143213_960_720.jpg',
        },
        {
            sequence: '4',
            url: 'https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg',
        },
        {
            sequence: '5',
            url: 'https://cdn.pixabay.com/photo/2014/08/08/22/14/cabin-413770_960_720.jpg',
        },
    ],
    createdAt: Date.now(),
    updatedAt: '',
    startDate: '2023/04/25',
    endDate: '2023/04/30',
    details: [
        {
            name: 'guests',
            amount: 10,
        },
        {
            name: 'bedrooms',
            amount: 6,
        },
        {
            name: 'beds',
            amount: 7,
        },
        {
            name: 'baths',
            amount: 6,
        },
    ],
    offers: [
        {
            name: 'wifi',
            isAvailable: true,
        },
        {
            name: 'kitchen',
            isAvailable: true,
        },
        {
            name: 'parking',
            isAvailable: true,
        },
        {
            name: 'pets',
            isAvailable: false,
        },
        {
            name: 'tv',
            isAvailable: true,
        },
        {
            name: 'pool',
            isAvailable: true,
        },
        {
            name: 'smoke',
            isAvailable: false,
        },
    ],
    reviews: [
        {
            id: '',
            reviewerId: '',
            content: '',
            rating: 0,
            createdAt: Date.now(),
            updatedAt: '',
            isEdited: false,
        },
    ],
    bookings: [
        {
            id: '',
            username: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
    isEdited: false,
    bullshit: true,
};

const propertiesMocks = [
    property1,
    property2,
    property3,
    property4,
    property5,
    property6,
    property7,
    property8,
];

export default propertiesMocks;
