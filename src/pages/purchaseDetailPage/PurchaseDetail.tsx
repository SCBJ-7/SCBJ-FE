import { useSearchParams } from "react-router-dom";

const PurchaseDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <div>PurchaseDetail</div>;
};

export default PurchaseDetail;
