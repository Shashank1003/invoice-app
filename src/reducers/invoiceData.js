import data from "../data.json"

const invoiceData = (state = data, action) => {
  switch (action.type) {
    case "INVOICE_DATA":
      return (state = action.payload);

    default:
      return state;
  }
};

export default invoiceData;
