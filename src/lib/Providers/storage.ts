/* eslint-disable @typescript-eslint/no-require-imports */
import type { Storage } from "redux-persist";

const createNoopStorage = (): Storage => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

let storage: Storage;

if (typeof window !== "undefined") {
  const createWebStorage =
    require("redux-persist/lib/storage/createWebStorage").default;
  storage = createWebStorage("local");
} else {
  storage = createNoopStorage();
}

export default storage;
