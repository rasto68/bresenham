const smallestFirst = (a ,b) => {
  if (a > b) {
    return [ b, a ];
  }
  return [ a, b ];
};

// https://www.baeldung.com/cs/bresenhams-line-algorithm
const bresenham = (x1, y1, x2, y2) => {
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  const dx = x2 - x1;
  const dy = (y2 - y1) * -1;

  let e = dx + dy;  
  while (true) {
    console.log(`${x1},${y1}`);
    if ((x1 === x2) && (y1 === y2)) {
      break;
    }
    e2 = 2 * e;
    if (e2 >= dy) {
      if (x1 === x2) {
        break;
      }
      e = e + dy;
      x1 = x1 + sx;
    }
    if (e2 < dy) {
      if (y1 === y2) {
        break;
      }
      e = e + dx;
      y1 = y1 + sy;
    }
  }
};

const drawVertical = (x, y1, y2) => {
  const [ startY, endY ] = smallestFirst(y1, y2);
  for (let y=startY; y <= endY; y++) {
    console.log(`${x},${y}`);
  }
};

const drawHorizontal = (y, x1, x2) => {
  const [ startX, endX ] = smallestFirst(x1, x2);
  for (let x=startX; x <= endX; x++) {
    console.log(`${x},${y}`);
  }
};

const line = (x1, y1, x2, y2) => {
  if (x1 === x2) {
    drawVertical(x1, y1, y2);
  } else if (y1 === y2) {
    drawHorizontal(y1, x1, x2);
  } else {
    bresenham(x1, y1, x2, y2);
  }
};