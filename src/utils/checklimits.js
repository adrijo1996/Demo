const checkLimits = (pos) => {
  if (pos.x < 580 && pos.x > 0 && pos.y < 380 && pos.y > 0) {
    return true;
  }
  return false;
};

export default checkLimits;
