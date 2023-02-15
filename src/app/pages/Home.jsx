import useStore from 'app/store/useStore';

function Home() {
    const counter = useStore((state) => state.counter);
    const inc = useStore((state) => state.inc);
    const dec = useStore((state) => state.dec);
    const reset = useStore((state) => state.reset);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={inc}>++</button>
            <button onClick={dec}>--</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Home;
