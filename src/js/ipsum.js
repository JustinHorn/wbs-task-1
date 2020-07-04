const shortIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is the industrie standard";
const middleIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const longIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

document
  .getElementsByName("short-ipsum")
  .forEach((e) => (e.innerHTML = shortIpsum));
document
  .getElementsByName("middle-ipsum")
  .forEach((e) => (e.innerHTML = middleIpsum));
document
  .getElementsByName("long-ipsum")
  .forEach((e) => (e.innerHTML = longIpsum));
