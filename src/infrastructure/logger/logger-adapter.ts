import AWS from "aws-sdk";
import dotenv from "dotenv";
import { LoggerPayload } from "../../domain/logger/logger-payload"; // Importando o payload
import { Logger } from "../../domain/logger/logger-port"; // Importando a interface do domínio

dotenv.config();

const cloudwatch = new AWS.CloudWatchLogs({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export class CloudWatchLogger implements Logger {
  // Método genérico para logar mensagens no CloudWatch com informações adicionais
  private log(
    level: "error" | "warn" | "info" | "debug",
    payload: LoggerPayload
  ) {
    // Logando no console para fácil leitura
    console.log(JSON.stringify(payload));

    // Enviando log para o CloudWatch
    cloudwatch.putLogEvents(
      {
        logGroupName: process.env.CLOUDWATCH_GROUP || "EcommerceLogs",
        logStreamName: "ApiLogs",
        logEvents: [
          {
            message: JSON.stringify(payload),
            timestamp: Date.now(),
          },
        ],
      },
      (err) => {
        if (err) {
          console.error("Error sending log to CloudWatch:", err);
        }
      }
    );
  }

  error(payload: LoggerPayload): void {
    this.log("error", payload);
  }

  warn(payload: LoggerPayload): void {
    this.log("warn", payload);
  }

  info(payload: LoggerPayload): void {
    this.log("info", payload);
  }

  debug(payload: LoggerPayload): void {
    this.log("debug", payload);
  }
}
