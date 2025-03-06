import cluster from "cluster";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} está rodando...`);

  // Criar workers com base no número de CPUs
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Reiniciar workers caso algum caia
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} caiu. Subindo um novo...`);
    cluster.fork();
  });
} else {
  // Importa o servidor apenas dentro do worker
  import("./server").then(() => {
    console.log(`Worker ${process.pid} iniciado.`);
  });
}
