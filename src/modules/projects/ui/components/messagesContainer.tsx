import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MessageCard } from "./messageCard";
import { MessageForm } from "./messageForm";
import { useEffect, useRef } from "react";

interface Props {
  projectId: string;
}

interface SuperJSONResponse<T> {
  json: T;
  meta?: Record<string, unknown>;
}

function isSuperJSONResponse<T>(
  value: T | SuperJSONResponse<T>
): value is SuperJSONResponse<T> {
  return typeof value === "object" && value !== null && "json" in value;
}

export const MessagesContainer = ({ projectId }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const trpc = useTRPC();

  const { data: messages } = useSuspenseQuery(
    trpc.messages.getMany.queryOptions({
      projectId,
    })
  );

  const messagesList = Array.isArray(messages)
    ? messages
    : isSuperJSONResponse(messages)
    ? messages.json || []
    : [];

  useEffect(() => {
    const lastAssistantMessage = messagesList.findLast(
      (message) => message.role === "ASSISTANT"
    );

    if (lastAssistantMessage) {
      // TODO: Set Active Fragment
    }
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messagesList.length]);

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="pt-2 pr-1">
          {messagesList.map((message) => (
            <MessageCard
              key={message.id}
              content={message.content}
              role={message.role}
              fragment={message.fragment}
              createdAt={message.createdAt}
              isActiveFragment={false}
              onFragmentClick={() => {}}
              type={message.type}
            />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="relative p-3 pt-1">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        <MessageForm projectId={projectId} />
      </div>
    </div>
  );
};
