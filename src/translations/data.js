// data.js

export async function getTranslations(language) {
  let translations = {};
  switch (language) {
    case "en":
      translations = await import("./en.json");
      break;
    case "gu":
      translations = await import("./gu.json");
      break;
    case "hi":
      translations = await import("./hi.json");
      break;
    default:
      translations = await import("./en.json");
  }
  return translations.default;
}
