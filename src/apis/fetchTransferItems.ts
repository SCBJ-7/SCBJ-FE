import axios from "axios";

export const fetchTransferItems = async () => {
  try {
    const response = await axios.get("/v1/reservations");
    return response.data;
  } catch (err) {
    alert("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
