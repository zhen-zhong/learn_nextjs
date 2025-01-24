'use client';  // 将此组件标记为客户端组件

import { useState, useEffect } from 'react';

const ClientComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Client-side effect!');
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <p>Current count: {count}</p>
        </div>
    );
};

export default ClientComponent;
