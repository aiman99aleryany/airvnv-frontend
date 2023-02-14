const countries = [
    {
        name: 'Afghanistan',
    },
    {
        name: 'Albania',
    },
    {
        name: 'Algeria',
    },
    {
        name: 'Andorra',
    },
    {
        name: 'Angola',
    },
    {
        name: 'Antigua and Barbuda',
    },
    {
        name: 'Argentina',
    },
    {
        name: 'Armenia',
    },
    {
        name: 'Aruba',
    },
    {
        name: 'Australia',
    },
    {
        name: 'Austria',
    },
    {
        name: 'Azerbaijan',
    },
    {
        name: 'Bahamas',
    },
    {
        name: 'Bahrain',
    },
    {
        name: 'Bangladesh',
    },
    {
        name: 'Barbados',
    },
    {
        name: 'Belarus',
    },
    {
        name: 'Belgium',
    },
    {
        name: 'Belize',
    },
    {
        name: 'Bolivia',
    },
    {
        name: 'Bosnia and Herzegovina',
    },
    {
        name: 'Botswana',
    },
    {
        name: 'Brazil',
    },
    {
        name: 'Brunei',
    },
    {
        name: 'Bulgaria',
    },
    {
        name: 'Cambodia',
    },
    {
        name: 'Cameroon',
    },
    {
        name: 'Canada',
    },
    {
        name: 'Cayman Islands',
    },
    {
        name: 'Chile',
    },
    {
        name: 'China',
    },
    {
        name: 'Colombia',
    },
    {
        name: 'Congo',
    },
    {
        name: 'Costa Rica',
    },
    {
        name: 'Croatia',
    },
    {
        name: 'Cuba',
    },
    {
        name: 'Cyprus',
    },
    {
        name: 'Czech Republic',
    },
    {
        name: 'Denmark',
    },
    {
        name: 'Dominican Republic',
    },
    {
        name: 'Ecuador',
    },
    {
        name: 'Egypt',
    },
    {
        name: 'El Salvador',
    },
    {
        name: 'Estonia',
    },
    {
        name: 'Faroe Islands',
    },
    {
        name: 'Finland',
    },
    {
        name: 'France',
    },
    {
        name: 'French Polynesia',
    },
    {
        name: 'Gabon',
    },
    {
        name: 'Georgia',
    },
    {
        name: 'Germany',
    },
    {
        name: 'Ghana',
    },
    {
        name: 'Greece',
    },
    {
        name: 'Greenland',
    },
    {
        name: 'Guadeloupe',
    },
    {
        name: 'Guam',
    },
    {
        name: 'Guatemala',
    },
    {
        name: 'Guinea',
    },
    {
        name: 'Haiti',
    },
    {
        name: 'Hashemite Kingdom of Jordan',
    },
    {
        name: 'Honduras',
    },
    {
        name: 'Hong Kong',
    },
    {
        name: 'Hungary',
    },
    {
        name: 'Iceland',
    },
    {
        name: 'India',
    },
    {
        name: 'Indonesia',
    },
    {
        name: 'Iran',
    },
    {
        name: 'Iraq',
    },
    {
        name: 'Ireland',
    },
    {
        name: 'Isle of Man',
    },
    {
        name: 'Israel',
    },
    {
        name: 'Italy',
    },
    {
        name: 'Jamaica',
    },
    {
        name: 'Japan',
    },
    {
        name: 'Kazakhstan',
    },
    {
        name: 'Kenya',
    },
    {
        name: 'Kosovo',
    },
    {
        name: 'Kuwait',
    },
    {
        name: 'Latvia',
    },
    {
        name: 'Lebanon',
    },
    {
        name: 'Libya',
    },
    {
        name: 'Liechtenstein',
    },
    {
        name: 'Luxembourg',
    },
    {
        name: 'Macedonia',
    },
    {
        name: 'Madagascar',
    },
    {
        name: 'Malaysia',
    },
    {
        name: 'Malta',
    },
    {
        name: 'Martinique',
    },
    {
        name: 'Mauritius',
    },
    {
        name: 'Mayotte',
    },
    {
        name: 'Mexico',
    },
    {
        name: 'Mongolia',
    },
    {
        name: 'Montenegro',
    },
    {
        name: 'Morocco',
    },
    {
        name: 'Mozambique',
    },
    {
        name: 'Myanmar [Burma]',
    },
    {
        name: 'Namibia',
    },
    {
        name: 'Nepal',
    },
    {
        name: 'Netherlands',
    },
    {
        name: 'New Caledonia',
    },
    {
        name: 'New Zealand',
    },
    {
        name: 'Nicaragua',
    },
    {
        name: 'Nigeria',
    },
    {
        name: 'Norway',
    },
    {
        name: 'Oman',
    },
    {
        name: 'Pakistan',
    },
    {
        name: 'Palestine',
    },
    {
        name: 'Panama',
    },
    {
        name: 'Papua New Guinea',
    },
    {
        name: 'Paraguay',
    },
    {
        name: 'Peru',
    },
    {
        name: 'Philippines',
    },
    {
        name: 'Poland',
    },
    {
        name: 'Portugal',
    },
    {
        name: 'Puerto Rico',
    },
    {
        name: 'Republic of Korea',
    },
    {
        name: 'Republic of Lithuania',
    },
    {
        name: 'Republic of Moldova',
    },
    {
        name: 'Romania',
    },
    {
        name: 'Russia',
    },
    {
        name: 'Saint Lucia',
    },
    {
        name: 'San Marino',
    },
    {
        name: 'Saudi Arabia',
    },
    {
        name: 'Senegal',
    },
    {
        name: 'Serbia',
    },
    {
        name: 'Singapore',
    },
    {
        name: 'Slovakia',
    },
    {
        name: 'Slovenia',
    },
    {
        name: 'South Africa',
    },
    {
        name: 'Spain',
    },
    {
        name: 'Sri Lanka',
    },
    {
        name: 'Sudan',
    },
    {
        name: 'Suriname',
    },
    {
        name: 'Swaziland',
    },
    {
        name: 'Sweden',
    },
    {
        name: 'Switzerland',
    },
    {
        name: 'Taiwan',
    },
    {
        name: 'Tanzania',
    },
    {
        name: 'Thailand',
    },
    {
        name: 'Trinidad and Tobago',
    },
    {
        name: 'Tunisia',
    },
    {
        name: 'Turkey',
    },
    {
        name: 'U.S. Virgin Islands',
    },
    {
        name: 'Ukraine',
    },
    {
        name: 'United Arab Emirates',
    },
    {
        name: 'United Kingdom',
    },
    {
        name: 'United States',
    },
    {
        name: 'Uruguay',
    },
    {
        name: 'Venezuela',
    },
    {
        name: 'Vietnam',
    },
    {
        name: 'Zambia',
    },
    {
        name: 'Zimbabwe',
    },
];

export default countries;
