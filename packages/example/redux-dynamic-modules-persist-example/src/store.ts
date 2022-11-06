import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux-dynamic-modules";
import { getPersistExtension } from "redux-dynamic-modules-persist-core";

const store = createStore({
  extensions: [getPersistExtension()],
});

const persistor = persistStore(store);

export { store, persistor };
