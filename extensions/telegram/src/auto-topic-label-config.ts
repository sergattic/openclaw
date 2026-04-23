import type {
  TelegramAccountConfig,
  TelegramDirectConfig,
} from "openclaw/plugin-sdk/config-runtime";

export const AUTO_TOPIC_LABEL_DEFAULT_PROMPT =
  "Name this chat in \u226410 chars. CamelCase, abbreviate aggressively. Return ONLY the label.";

export function resolveAutoTopicLabelConfig(
  directConfig?: TelegramDirectConfig["autoTopicLabel"],
  accountConfig?: TelegramAccountConfig["autoTopicLabel"],
): { enabled: true; prompt: string } | null {
  const config = directConfig ?? accountConfig;
  if (config === undefined || config === true) {
    return { enabled: true, prompt: AUTO_TOPIC_LABEL_DEFAULT_PROMPT };
  }
  if (config === false || config.enabled === false) {
    return null;
  }
  return {
    enabled: true,
    prompt: config.prompt?.trim() || AUTO_TOPIC_LABEL_DEFAULT_PROMPT,
  };
}
