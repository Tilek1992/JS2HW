const triangle = [
  { x: 0, y: 0 },
  { x: 0, y: 200 },
  { x: 400, y: 200 }
];
function moveBlock(x, y, vertexIndex) {
  const nextVertex = triangle[(vertexIndex + 1) % triangle.length];
  const distanceX = nextVertex.x - x;
  const distanceY = nextVertex.y - y;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  const speed = 700; // пикселей в секунду
  const time = distance / speed * 1000;
  const block = document.getElementById('block');
  block.style.top = nextVertex.y + 'px';
  block.style.left = nextVertex.x + 'px';
  setTimeout(() => {
    moveBlock(nextVertex.x, nextVertex.y, (vertexIndex + 1) % triangle.length);
  }, time);
}
const startingVertex = triangle[0];
moveBlock(startingVertex.x, startingVertex.y, 0);
function onAnimationEnd() {
  const startingVertex = triangle
}
