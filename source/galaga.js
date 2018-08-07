// звездочки
const maxCount = 10;
let star = new Array(maxCount);
star = star.fill(true);
star = star.map(() => new Star());
  
// взаимодействие
setInterval(() => star.forEach(star => star.move()), 20);

// использование движка
const engine = new Engine();
engine.objects.push(...star);