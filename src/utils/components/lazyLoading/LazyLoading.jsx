import React from 'react';

function LazyLoading(props) {
    return (
        <React.Suspense fallback={props.fallback}>
            {props.element}
        </React.Suspense>
    );
}

export default LazyLoading;
