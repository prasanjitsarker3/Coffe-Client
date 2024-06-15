"use client";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store, { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const ProviderRedux = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" richColors />
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderRedux;
