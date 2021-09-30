import { useCallback, useState, useEffect } from "react";
import { makeId } from "../lib/util";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const b64Value = storageObject.getItem(key);
    if (b64Value !== null) {
      const strValue = atob(b64Value.substring(10));
      try {
        return JSON.parse(strValue);
      } catch (e) {
        return strValue;
      }
    }

    if (typeof initialValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    const b64Str = btoa(JSON.stringify(value));
    storageObject.setItem(key, makeId(10)+b64Str);
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
