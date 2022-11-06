//@ts-ignore
import { usePersistContext } from "redux-dynamic-modules-persist-react";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import counterReducer from "./counterReducer";

export default function CounterModule() {
  const persistor = usePersistContext();
  return (
    <DynamicModuleLoader
      modules={[
        {
          id: "counter",
          reducerMap: {
            counter: counterReducer,
          },
          initialActions: [
            {
              type: "counter/plus",
            },
          ],
        },
      ]}></DynamicModuleLoader>
  );
}
