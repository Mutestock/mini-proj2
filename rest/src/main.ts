import { oak, colors, oakCors } from "../deps.ts";
import { router } from "./routes/router.ts";
import { config } from "./utils/config.ts";

// Router setup
// Using Middleware framework Oak
// https://deno.land/x/oak@v9.0.0

let app = new oak.Application();
app.use(oakCors({ origin: true }));
app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", ({ hostname, port, serverType }) => {
    console.log(
        colors.bold("Start listening on ") + colors.yellow(`${hostname}:${port}`),
    );
    console.log(colors.bold("  using HTTP server: " + colors.yellow(serverType)));
});

await app.listen({ hostname: config.server.hostname, port: config.server.port });


