export const postUsers = (req, res) => {
  const { id, name, address } = req.body;

  try {
    res.json({
      status: "success",
      id,
      name,
      address,
    });
    // res.status(200).json({
    //   status: "success",
    //   data: req.body,
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export const getSingleUsers = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      param: req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export const getAllUsers = (req, res) => {
  console.log(req.query);
  try {
    res.status(200).json({
      status: "success",
      query: req.query.name,
      Fname: req.query.fName,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export const deleteUsers = () => {};
export const updateUsers = () => {};
