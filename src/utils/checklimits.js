const checkLimits = (pos) => {
  if (pos.x < 400 && pos.x > 180 && pos.y < 380 && pos.y > 200) {
    return true;
  }
  return false;
};

export default checkLimits;
