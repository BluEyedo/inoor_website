"use client";

import { store } from "@/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

type Props = {
  children?: React.ReactNode;
};

export const ReduxToolkitProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
