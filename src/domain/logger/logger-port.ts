import { LoggerPayload } from "./logger-payload"; // Importando o tipo do payload de log

// Definindo a interface do logger no domínio
export interface Logger {
  error(payload: LoggerPayload): void;
  warn(payload: LoggerPayload): void;
  info(payload: LoggerPayload): void;
  debug(payload: LoggerPayload): void;
}
