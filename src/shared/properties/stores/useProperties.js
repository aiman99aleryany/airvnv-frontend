import { create } from 'zustand';

const useProperties = create((set) => ({
    properties: [],
    updateProperties: async (newProperties) => {
        return set((state) => ({
            properties: newProperties,
        }));
    },
}));

export default useProperties;
