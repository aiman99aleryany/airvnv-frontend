const INIT_USER = {
    id: 'fdjdkjfdk',
    name: 'Aiman',
    age: 22,
    hobbies: ['elixir', 'fp', 'music'],
};

const User = {
    init: (fetchedUser) => {
        return {
            id: fetchedUser.id ? fetchedUser.id : INIT_USER.id,
            // and so on
            // use destructuring wherever makes sense :)
        };
    },
};

export default User;
