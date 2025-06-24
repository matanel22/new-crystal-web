export function truncateText(text, maxLength = 20) {
  if (typeof text === "string" && text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}