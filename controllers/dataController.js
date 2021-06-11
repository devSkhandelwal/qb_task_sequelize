const models = require("../models");

exports.getData = async (req, res, next) => {
  try {
    const data = await models.Data.findAll();
    if (!data) {
      res.json({
        message: "no data exists",
      });
    }
    res.json(data);
  } catch (error) {
    return next("something went wrong");
  }
};
