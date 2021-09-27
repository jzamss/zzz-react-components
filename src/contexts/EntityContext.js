import React, { useContext } from "react";

const EntityContext = React.createContext();
EntityContext.displayName = "EntityContext";

const EntitySetContext = React.createContext();
EntitySetContext.displayName = "EntitySetContext";

const EntityUpdateContext = React.createContext();
EntityUpdateContext.displayName = "EntityUpdateContext";

const EntityProvider = ({ entity, setEntity, updateEntity, children }) => {
  return (
    <EntityContext.Provider value={entity}>
      <EntitySetContext.Provider value={setEntity}>
        <EntityUpdateContext.Provider value={updateEntity}>
          {children}
        </EntityUpdateContext.Provider>
      </EntitySetContext.Provider>
    </EntityContext.Provider>
  );
};

const getEntityContext = () => {
  const context = useContext(EntityContext);
  if (context === undefined) {
    throw new Error("useEntity must be used within an EntityProvider");
  }
  return context;
};

const getEntitySetContext = () => {
  const context = useContext(EntitySetContext);
  if (context === undefined) {
    throw new Error("useEntity must be used within an EntityProvider");
  }
  return context;
};

const getEntityUpdateContext = () => {
  const context = useContext(EntityUpdateContext);
  if (context === undefined) {
    throw new Error("useEntity must be used within an EntityProvider");
  }
  return context;
};

const useEntity = () => {
  return [getEntityContext(), getEntitySetContext(), getEntityUpdateContext()];
};

export { EntityProvider, useEntity };
