"use client";
import { AppStore, makeStore } from "@/redux/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/app/loading";
// import Loading from "@/components/section/Loading";
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  const cartpersistor = persistStore(storeRef.current);
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<Loading />} persistor={cartpersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
