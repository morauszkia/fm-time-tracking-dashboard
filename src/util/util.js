export function getImageURL(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

export function toKebabCase(name) {
  return name
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}
