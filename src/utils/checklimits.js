const checkLimits = (pos) => {
  if (pos.x < 570 && pos.x > 10 && pos.y < 370 && pos.y > 10) {
    return true;
  }
  return false;
};

export default checkLimits;
