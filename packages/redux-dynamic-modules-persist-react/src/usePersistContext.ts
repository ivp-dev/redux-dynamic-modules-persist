import React from "react";
import PersistContext from "./PersistContext";

export default function usePersistor() {
  const persistor = React.useContext(PersistContext);
  return persistor;
}
