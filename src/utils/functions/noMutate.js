const noMutate = (obj = null) => {
    if (!obj) return undefined;
    return JSON.parse(JSON.stringify(obj));
};

export default noMutate;
