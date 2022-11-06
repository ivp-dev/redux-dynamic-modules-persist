import { IModule } from "redux-dynamic-modules-core";

export default function getPersistExtension() {
  return {
    onModuleAdded: (module: IModule<any>): void => {
      if (module.persistor) {
        module.persistor.persist();
      }
    },
  };
}
