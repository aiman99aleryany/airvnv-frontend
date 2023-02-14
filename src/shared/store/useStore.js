import { create } from 'zustand';

const useStore = create((set) => ({
    counter: 0,

    inc: () => {
        return set((state) => ({
            counter: state.counter + 1,
        }));
    },

    dec: () => {
        return set((state) => ({
            counter: state.counter - 1,
        }));
    },

    reset: () => {
        return set((state) => ({
            counter: 0,
        }));
    },
}));

export default useStore;
