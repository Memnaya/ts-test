const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 100, 200, 100);
}

