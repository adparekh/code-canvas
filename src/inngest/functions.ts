import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const summarizeContents = inngest.createFunction(
  { id: "summarize-contents" },
  { event: "app/ticket.created" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );

    return { output };
  }
);
