import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux-dynamic-modules";

const store = createStore({});

store.addModule({
  id: "app",
  reducerMap: {
    app: persistReducer(
      {
        key: "app",
        storage,
      },
      (state = {}) => state
    ),
  },
});

const persistor = persistStore(store);

export { store, persistor };
