export interface BusinessloginUrl {
  api: string;
  loggin: string;
  messaging: string;
  serverLinks: ServerLink[];
}

export interface BusinessLogin {
  url: BusinessloginUrl;
}

export interface ServerLink {
    serverType: number;
    url: string;
}

export enum ServerType {
  Web = 0,
  API = 1,
  BGEngine = 2,
  DocumentReports = 3,
  AnalyticReports = 4,
  Search = 5,
  Auth = 6,
  Log = 7,
  Board = 8,
  APE = 21,
  ATE = 22,
  APSA = 23,
  Storage = 31,
  RTC = 32,
  MessageEmail = 33,
  MergeFields = 34
}
