import { create } from 'zustand';
import INIT_USERS from './INIT_USERS';
import noMutate from '../../functions/noMutate';
import currentUser from './currentUser';

const useUsers = create((set) => ({
    users: INIT_USERS,

    currentUser: null,

    addUser: (newUser) => {
        return set((state) => ({
            users: [...noMutate(state.users), ...noMutate(newUser)],
        }));
    },

    editUser: (userId, editedUser) => {
        return set((state) => ({
            users: state.users.map((user) =>
                user.id === userId
                    ? { ...noMutate(user), ...noMutate(editedUser) }
                    : user
            ),
        }));
    },

    editCurrentUser: (editedKey, editedValue) => {
        return set((state) => ({
            currentUser: {
                ...JSON.parse(JSON.stringify(state.currentUser)),
                [editedKey]: editedValue,
            },
        }));
    },

    setCurrentUser: () => {
        return set((state) => ({
            currentUser: state.users.filter(user),
        }));
    },
}));

export default useUsers;
