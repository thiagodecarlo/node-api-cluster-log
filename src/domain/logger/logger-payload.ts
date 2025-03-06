import { LogEventName } from "./logger-event-name";

// Definindo a estrutura do payload para logs
export interface LoggerPayload {
  message: string; // Mensagem do log
  name: LogEventName; // Tipo de evento (jornada)
  className: string; // Nome da classe onde o log foi gerado
  method: string; // Nome do método onde o log foi gerado
  extraAttributes?: object; // Atributos extras, como ID, erros, etc.
  timestamp: string; // Data e hora do log
}
