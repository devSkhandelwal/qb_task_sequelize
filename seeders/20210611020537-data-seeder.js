"use strict";

const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const getDataFromApi = async () => {
  try {
    const res = await axios.get("https://api.wazirx.com/api/v2/tickers");
    return res.data;
  } catch (error) {
    console.log(`${error.message}`);
  }
};

const getSlicedData = async () => {
  const data = [];

  const dataFromApi = await getDataFromApi();

  for (let key in dataFromApi) {
    data.push(dataFromApi[key]);
  }
  return data.splice(0, 10);
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    try {
      await queryInterface.bulkInsert("Data", await getSlicedData(), {});
      console.log("Data Imported");
    } catch (error) {
      console.log(error.message);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    try {
      await queryInterface.bulkDelete("Data", null, {});
      console.log("Data destroyed");
    } catch (error) {
      console.log(error.message);
    }
  },
};
