const asyncPipe = (...fns) => {
    return (value) => {
        return fns.reduce(async (fn) => await fn(value), value);
    };
};

export default asyncPipe;
