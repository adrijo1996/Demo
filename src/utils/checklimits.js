const checkLimits = (pos) => {
  if (pos.x < 580 && pos.x > 20 && pos.y < 380 && pos.y > 50) {
    return true;
  }
  return false;
};

export default checkLimits;
