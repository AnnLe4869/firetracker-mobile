export interface AppContextType {
  userLocation: UserLocationType;
  fireLocations: FireLocationType[];
  dangerLevel: Boolean;
  updateUserLocation: (location: UserLocationType) => void;
  updateFireLocation: (fire: FireLocationType) => void;
  updateDangerLevel: (level: Boolean) => void;
}

export interface FireLocationType {
  id: String;
  long: Number;
  lat: Number;
}
export interface UserLocationType {
  long: Number;
  lat: Number;
}
