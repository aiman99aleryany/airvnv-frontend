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
    ownerId: '17',
    title: 'Ibiza House',
    type: 'house',
    price: 500,
    location: {
        city: 'Ibiza',
        country: 'Spain',
    },
    rating: 5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336165_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/01/25',
    endDate: '2023/01/30',
    details: {
        guests: 10,
        bedrooms: 6,
        beds: 7,
        baths: 6,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: false,
        tv: true,
        pool: true,
        smoke: false,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The roof is high, triangular and layered and is covered with grey ceramic tiles. Two small chimneys sit at the side of the house. Several small windows let in just enough light to the rooms below the roof. The house itself is surrounded by a gorgeous garden with many hidden lights that make the garden come to life at night.',
};

property2.fields = {
    id: nanoid(),
    ownerId: '17',
    title: 'Berlin House',
    type: 'house',
    price: 250,
    location: {
        city: 'Berlin',
        country: 'Germany',
    },
    rating: 4.5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2017/09/16/17/27/architecture-2756145_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389258_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/01/25',
    endDate: '2023/02/30',
    details: {
        guests: 5,
        bedrooms: 5,
        beds: 5,
        baths: 6,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: true,
        tv: true,
        pool: false,
        smoke: true,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'From the outside this house looks nice and traditional. It has been built with tan bricks and has spruce wooden decorations. Tall, large windows allow enough light to enter the home and have been added to the house in a very asymmetric way.',
};

property3.fields = {
    id: nanoid(),
    ownerId: '17',
    title: 'New York House',
    type: 'house',
    price: 600,
    location: {
        city: 'New York',
        country: 'United States',
    },
    rating: 5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2016/08/03/19/22/carriacou-1567544_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2016/11/14/02/28/apartment-1822409_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2015/12/05/23/22/bedroom-1078890_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/02/01',
    endDate: '2023/02/24',
    details: {
        guests: 4,
        bedrooms: 4,
        beds: 4,
        baths: 4,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: false,
        tv: true,
        pool: true,
        smoke: true,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The building is shaped like a T. The two extensions extend into wooden overhanging panels reaching until the end of that side of the house. The second floor is smaller than the first, which, in combination with its placement, creates an original look. This floor has a slightly different style than the floor below.',
};

property4.fields = {
    id: '69',
    ownerId: '19',
    title: 'London house',
    type: 'house',
    price: 300,
    location: {
        city: 'London',
        country: 'United Kingdom',
    },
    rating: 3.8,
    images: {
        first: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/luxury-villas-1737167_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2015/03/12/14/23/bedroom-670249_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2016/01/13/14/01/bedroom-1137939_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2016/08/07/00/44/bed-1575491_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/03/15',
    endDate: '2023/03/30',
    details: {
        guests: 4,
        bedrooms: 4,
        beds: 4,
        baths: 3,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: false,
        tv: true,
        pool: false,
        smoke: false,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The building is shaped like a squared S. The two extensions extend into wooden sunscreens structures circling around half the house. The second floor is the same size as the first, which has been built exactly on top of the floor below it. This floor has roughly the same style as the floor below.',
};

property5.fields = {
    id: nanoid(),
    ownerId: '19',
    title: 'Milan House',
    type: 'house',
    price: 350,
    location: {
        city: 'Milan',
        country: 'Italy',
    },
    rating: 4.9,
    images: {
        first: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2016/11/18/14/25/bed-1834916_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2014/07/31/00/40/bedroom-405920_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2014/09/25/18/05/bedroom-460762_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/02/04',
    endDate: '2023/02/16',
    details: {
        guests: 5,
        bedrooms: 5,
        beds: 5,
        baths: 3,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: false,
        tv: true,
        pool: false,
        smoke: true,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        "The roof is high and v-shaped and is covered with dark ceramic tiles. One large chimney sits at the side of the house. There are no windows on the roof. The house itself is surrounded by a modest garden, with mostly grass, a few flower patches and a children's playground.",
};

property6.fields = {
    id: nanoid(),
    ownerId: '19',
    title: 'Melbourne house',
    type: 'house',
    price: 730,
    location: {
        city: 'Melbourne',
        country: 'Australia',
    },
    rating: 5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2019/11/05/18/21/lifestyle-4604173_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148891_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2018/08/18/23/02/bathroom-3615667_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/02/1',
    endDate: '2023/02/17',
    details: {
        guests: 7,
        bedrooms: 7,
        beds: 7,
        baths: 8,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: true,
        pets: false,
        tv: true,
        pool: true,
        smoke: true,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The building is square shaped. The house is partially surrounded by stylish gardens on two sides. The second floor is smaller than the first, which allowed for several small balconies on one side of the house. This floor follows the same style as the floor below.',
};

property7.fields = {
    id: nanoid(),
    ownerId: '19',
    title: 'Palermo flat',
    type: 'flat',
    price: 120,
    location: {
        city: 'Palermo',
        country: 'Italy',
    },
    rating: 4.5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389259_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2018/08/18/23/02/bathroom-3615667_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/02/10',
    endDate: '2023/02/18',
    details: {
        guests: 2,
        bedrooms: 2,
        beds: 2,
        baths: 2,
    },
    offers: {
        wifi: true,
        kitchen: true,
        parking: false,
        pets: false,
        tv: true,
        pool: false,
        smoke: false,
    },
    bookings: [
        {
            id: '17',
            username: '',
            name: '',
            checkIn: '2023/02/12',
            checkOut: '2023/02/17',
        },
    ],
    description:
        'The building is shaped like a squared S. The two extensions extend into overgrown wooden overhanging panels to each side. The second floor is bigger than the first, which creates a stylish overhang around half the house. This floor follows the same style as the floor below.',
};

property8.fields = {
    id: nanoid(),
    ownerId: '17',
    title: 'Romania cabin',
    type: 'cabin',
    price: 40,
    location: {
        city: 'Melbourne',
        country: 'Australia',
    },
    rating: 5,
    images: {
        first: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg',
        second: 'https://cdn.pixabay.com/photo/2013/03/23/04/29/master-bedroom-96086_960_720.jpg',
        third: 'https://cdn.pixabay.com/photo/2013/07/04/18/33/western-143213_960_720.jpg',
        forth: 'https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_960_720.jpg',
        fifth: 'https://cdn.pixabay.com/photo/2014/08/08/22/14/cabin-413770_960_720.jpg',
    },
    createdAt: Date.now(),
    startDate: '2023/02/29',
    endDate: '2023/03/15',
    details: {
        guests: 1,
        bedrooms: 1,
        beds: 1,
        baths: 1,
    },
    offers: {
        wifi: false,
        kitchen: true,
        parking: false,
        pets: false,
        tv: false,
        pool: false,
        smoke: true,
    },
    bookings: [
        {
            id: '',
            username: '',
            name: '',
            checkIn: '',
            checkOut: '',
        },
    ],
    description:
        'The cabin is equipped with a modern kitchen and one large bathroom, it also has a fairly small living room, four bedrooms, a grand dining room, an office and a modest basement.',
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
