import { useContext } from "react";
import EntityContext from "../contexts/EntityContext";

const useEntityContext = () => {
  return useContext(EntityContext);
};

export default useEntityContext;
