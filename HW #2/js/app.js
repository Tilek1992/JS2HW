const block = document.getElementById("block");

function moveBlock(position) {
  block.style.left = position + "px";
  if (position < window.innerWidth - 200) {
    position += 5;
    requestAnimationFrame(() => moveBlock(position));
  }
}

moveBlock(0);
