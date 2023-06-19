export interface I_Data {
  year: number;
  data: I_Race_Location[] | I_DriverName[] | I_TeamName[];
}
export interface I_Race_Location {
  data: I_DataRace[];
  location: string;
  locationId: string;
}
export interface I_DataRace {
  pos: string;
  driver: string;
  team: string;
  laps: string;
  time: string;
  points: string;
}
export interface I_DriverName {
  driver: string;
  data: I_DataDriver[];
}
export interface I_DataDriver {
  grandPrix: string;
  date: string;
  car: string;
  racePosition: string;
  points: string;
}
export interface I_TeamName {
  team: string;
  data: I_DataTeamName[];
}
export interface I_DataTeamName {
  grandPrix: string;
  date: string;
  points: string;
}

export interface I_LapTable {
  driver: string;
  data: I_Data_LapTable;
}

export interface I_Data_LapTable {
  grandPrix: string;
  driverFirstName: string;
  driverLastName: string;
  abbreviation: string;
  car: string;
  time: string;
}
