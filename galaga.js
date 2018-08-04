// звездочки
const maxCount = 10;
let stars = new Array(maxCount);
stars = stars.fill(true);
stars = stars.map(() => new Stars());
  
// взаимодействие
setInterval(() => stars.forEach(stars => stars.move()), 20);

// использование движка
const engine = new Engine();
engine.objects.push(...stars);