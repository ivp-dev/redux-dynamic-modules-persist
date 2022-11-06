import React from "react";
import { Persistor } from "redux-persist";

const PersistContext = React.createContext<Persistor | undefined>(undefined);

export default PersistContext;
