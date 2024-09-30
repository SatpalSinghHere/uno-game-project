// lib/StoreProvider.tsx
'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const storeRef = useRef(store);

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;