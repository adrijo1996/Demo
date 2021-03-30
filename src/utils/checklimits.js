const checkLimits = (pos) => {
  if (pos.x < 585 && pos.x > 15 && pos.y < 350 && pos.y > 130) {
    return true;
  }
  return false;
};

export default checkLimits;
