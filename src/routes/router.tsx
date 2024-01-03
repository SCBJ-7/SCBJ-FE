import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/homePage";
import { NotFound } from "../pages/notFoundPage";
import { Search } from "../pages/searchPage";
import { SignUp } from "../pages/signUpPage";
import { SignIn } from "../pages/signInPage";
import { My } from "../pages/myPage";
import { TransferWriting } from "../pages/transferWritingPage";
import { TransferSale } from "../pages/transferSalePage";
import { TransferPurchase } from "../pages/transferPurchasePage";
import { Detail } from "../pages/detailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <NotFound />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <NotFound />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/myPage",
    element: <My />,
    errorElement: <NotFound />,
  },
  {
    path: "/hotels/new",
    element: <TransferWriting />,
    errorElement: <NotFound />,
  },
  {
    path: "/saleList",
    element: <TransferSale />,
    errorElement: <NotFound />,
  },
  {
    path: "/purchaseList",
    element: <TransferPurchase />,
    errorElement: <NotFound />,
  },
  {
    path: "/rooms",
    element: <Detail />,
    errorElement: <NotFound />,
  },
]);
