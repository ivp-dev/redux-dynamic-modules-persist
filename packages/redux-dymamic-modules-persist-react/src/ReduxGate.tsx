import React from "react";
import { Persistor } from "redux-persist";
import PersistContext from "./PersistContext";

interface PersistGateProps {
  onBeforeLift?: () => void;
  loading?: React.ReactNode;
  persistor: Persistor;
  children: React.ReactNode;
}

export default function PersistGate({
  children,
  persistor,
  loading,
  onBeforeLift,
}: PersistGateProps) {
  const [bootstrapped, setBootstrapped] = React.useState(false);
  React.useEffect(() => {
    let unsubscribe: (() => any) | null = null;

    const handlePersistorState = () => {
      const { bootstrapped } = persistor.getState();

      if (bootstrapped) {
        if (onBeforeLift) {
          Promise.resolve(onBeforeLift()).finally(() => setBootstrapped(true));
        } else {
          setBootstrapped(true);
        }
        unsubscribe?.();
      }
    };

    unsubscribe = persistor.subscribe(handlePersistorState);
    handlePersistorState();
    return () => {
      unsubscribe?.();
    };
  }, [onBeforeLift, persistor]);

  return (
    <PersistContext.Provider value={persistor}>
      {bootstrapped ? children : loading || null}
    </PersistContext.Provider>
  );
}
