const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (value) => {
  try {
    const getData1 = await promiseTheaterVGC();
    
    getData1.push.apply(getData1, await promiseTheaterIXX());

    const getDataAll = getData1.map((data) => {
      return data.hasil;
    })
    
    const result = "Jumlah penonton yang " + value + " = " + getDataAll.filter(data => data === value).length;
    
    console.log(result);

  } catch (error) {
    alert(error);
  }
};

module.exports = {
  promiseOutput,
};
