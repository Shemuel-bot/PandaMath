import "dotenv/config";
import { app, prisma } from "./app.js";

const port = Number(process.env.PORT ?? 3000);

try {
  await prisma.$connect();
  const server = app.listen(port, () => {
    console.log(`PandaMath API listening on http://localhost:${port}`);
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      server.close(async () => {
        await prisma.$disconnect();
        process.exit(0);
      });
    });
  }
} catch (error) {
  console.error("Failed to start the PandaMath API:", error);
  await prisma.$disconnect();
  process.exitCode = 1;
}