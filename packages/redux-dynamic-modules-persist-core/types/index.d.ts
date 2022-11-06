import { IModule } from "redux-dynamic-modules-core";
import { Persistor } from "redux-persist";

declare module "redux-dynamic-modules-core" {
  export interface IModule<State> {
    persistor?: Persistor;
  }
}