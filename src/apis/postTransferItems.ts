import axios from "axios";

interface PostProps {
  pathVariable: string;
  firstPrice: number;
  secondPrice: number;
  bank: string;
  accountNumber: string;
  secondGrantedPeriod: number;
}

export const postTransferItems = async ({
  pathVariable,
  firstPrice,
  secondPrice,
  bank,
  accountNumber,
  secondGrantedPeriod,
}: PostProps) => {
  try {
    const response = await axios.post(
      `https://3.34.147.187.nip.io/v1/products/${pathVariable}`,
      {
        firstPrice,
        secondPrice,
        bank,
        accountNumber,
        secondGrantedPeriod,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (err) {
    alert(`⚠️예기치 못한 에러가 발생하였습니다. ${err}`);
    console.log(err, "err");
  }
};
