import { createContext } from "react";
import {
  UserLocationType,
  FireLocationType,
  AppContextType
} from "../type/type";

export const blankData = {
  userLocation: {
    long: "",
    lat: ""
  },
  fireLocations: [{ id: "", long: "", lat: "" }],
  dangerLevel: 0,
  updateUserLocation: (_: UserLocationType) => {},
  updateFireLocation: (_: FireLocationType) => {},
  updateDangerLevel: (_: Number) => {}
};
export default createContext<AppContextType>(blankData);
