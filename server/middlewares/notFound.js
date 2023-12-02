const notFoundHandler = (req, res, next) => {
  res.json({ msg: "Route doesnot exits" });
};
export default notFoundHandler;
