// Definindo os diferentes tipos de evento (jornadas) no log
export enum LogEventName {
  DB_EVENT = "DB_EVENT",
  DB_ERROR = "DB_ERROR",
  STARTUP_EVENT = "STARTUP_EVENT",
  API_EVENT = "API_EVENT",
  API_ERROR = "API_ERROR",
  USER_ACTION = "USER_ACTION",
  SYSTEM_EVENT = "SYSTEM_EVENT",
}
