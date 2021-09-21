import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import _Loader from "../../components/Loader";
import { AuthContext } from "../../lib/store/AuthStore";
import GooglePayButton from "@google-pay/button-react";
const Wallet = () => {
  const { loading, user, userInfo } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
    if (userInfo && userInfo.type === "CLIENT") {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  if (user && userInfo)
    return (
      <div>
        PatMent
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },

                tokenizationSpecification: {
                  type: "DIRECT",

                  // parameters: {
                  //   gateway: "example",
                  //   gatewayMerchantId: "BCR2DN6T2624PQC4",
                  // },
                },
              },
            ],
            merchantInfo: {
              merchantId: "BCR2DN6T2624PQC4",
              merchantName: "GrowwTen",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "INR",
              countryCode: "IN",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
    );
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Wallet;
