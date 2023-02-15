const setLocalStorage = (KEY, value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

export default setLocalStorage;
