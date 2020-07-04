let icons = document.getElementsByClassName("center-absolute-initial");
for (let i = 0; i < icons.length; i++) {
  makeIconSmaller(icons[i]);
  centerIcon(icons[i]);
}

function centerIcon(icon) {
  const width = icon.clientWidth;
  icon.style.marginLeft = "-" + Math.floor(width * 0.5) + "px";
  const height = icon.clientHeight;
  icon.style.marginTop = "-" + Math.floor(height * 0.5) + "px";
}

function makeIconSmaller(icon) {
  icon.style.width = Math.floor(icon.clientWidth / 2) + "px";
}

function onMouseEnter(obj) {
  if (!obj.children || obj.children.length === 1) {
    appendHoverElements(obj);
  }
  obj.children[1].style.opacity = 0.5;
  obj.children[2].style.opacity = 1;
}

function onMouseLeave(obj) {
  obj.children[1].style.opacity = 0;
  obj.children[2].style.opacity = 0;
}

function appendHoverElements(obj) {
  const foreground = createForeGround();
  const center = createCenter();

  obj.appendChild(foreground);
  obj.appendChild(center);

  centerIcon(center);
  center.style.transition = "1s";
  foreground.style.transition = "1s";
}

function createForeGround() {
  const foreground = document.createElement("div");
  foreground.className = "green-foreground";
  return foreground;
}

function createCenter() {
  const center = document.createElement("a");
  center.className = "center-absolute-initial";
  center.href = "#";

  center.appendChild(createImage());

  center.appendChild(createHeadline());

  return center;
}

function createImage() {
  const img = document.createElement("img");
  img.src = "src/assets/Shape 13.png";
  return img;
}

function createHeadline() {
  const h6 = document.createElement("h6");
  h6.className = "headline";
  h6.innerHTML = "SHOP NOW";
  return h6;
}
