import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { generateCode } from "@/inngest/functions";

// Create an API that serves zero function
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateCode],
});
