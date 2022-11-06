import { usePersistContext } from "redux-dynamic-modules-persist-react";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import { Persistor, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counterReducer";
import Counter from "./Counter";

const persitConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["count"],
};

const getModule = (persistor: Persistor) => ({
  id: "counter",
  reducerMap: {
    counter: persistReducer(persitConfig, counterReducer),
  },
  initialActions: [
    {
      type: "counter/plus",
    },
  ],
  persistor: persistor,
});

export default function CounterModule() {
  const persistor = usePersistContext();
  return (
    //@ts-ignore
    <DynamicModuleLoader modules={[getModule(persistor)]}>
      <Counter />
    </DynamicModuleLoader>
  );
}
