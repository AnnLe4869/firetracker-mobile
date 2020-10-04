export interface AppContextType {
  userLocation: UserLocationType;
  fireLocations: FireLocationType[];
  dangerLevel: Number;
  updateUserLocation: (location: UserLocationType) => void;
  updateFireLocation: (fire: FireLocationType) => void;
  updateDangerLevel: (level: Number) => void;
}

export interface FireLocationType {
  id: String;
  long: String;
  lat: String;
}
export interface UserLocationType {
  long: String;
  lat: String;
}
