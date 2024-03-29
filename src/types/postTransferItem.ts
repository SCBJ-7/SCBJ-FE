export interface PostTransferProps {
  pathVariable: string;
  firstPrice: number;
  secondPrice: number;
  bank: string;
  accountNumber: string;
  secondGrantPeriod: number;
  isRegistered: boolean;
  standardTimeSellingPolicy: boolean;
  totalAmountPolicy: boolean;
  sellingModificationPolicy: boolean;
  productAgreement: boolean;
}
