import { IExtension, IModule } from "redux-dynamic-modules-core";

export default function getPersistExtension(): IExtension {
  return {
    onModuleAdded: (module: IModule<any>): void => {
      if (module.persistor) {
        module.persistor.persist();
      }
    },
  };
}
