import React from "react";
import { useImmer } from "use-immer";
import { EntityProvider } from "../contexts";

const AppContext = ({ initialEntity = {}, children }) => {
  const [entity, setEntity] = useImmer(initialEntity);

  const updateEntity = (field, value) => {
    setEntity((draft) => {
      draft[field] = value;
    });
  };

  console.log("APPCONTEXT", entity);

  return (
    <EntityProvider
      entity={entity}
      setEntity={setEntity}
      updateEntity={updateEntity}
    >
      {children}
    </EntityProvider>
  );
};

export default AppContext;
