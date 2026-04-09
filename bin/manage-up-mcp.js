#!/usr/bin/env node

import { startServer } from "../mcp-server.js";

startServer().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
