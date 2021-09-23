import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import request from "../lib/api";
import { db } from "../lib/firebase";
import { AuthContext } from "../lib/store/AuthStore";
import { UtilityContext } from "../lib/store/UtiltyStore";
import _Loader from "./Loader";
import Logo from "../components/Images/growwten.svg";
import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const AddTaskModal = ({ getClientTasks }) => {
  const [type, setType] = useState("");
  useEffect(() => {
    setType(window.localStorage.getItem("type"));
  }, [type]);
  const displayRazorPay = async () => {
    setLoading1(true);
    try {
      const isValid = await checkYoutubeLink();
      if (!isValid) {
        alert.error("You have entered the wrong youtube channel link :(");
        setLoading1(false);
        return;
      }
      let exist = false;
      if (referralCode) {
        exist = await refferalCodeExist();
        if (!exist) {
          alert.error("You have entered the wrong Refferal Code :(");
          setLoading1(false);
          return;
        }
      }

      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("You are offline or Network connection is very poor!!!");
        return;
      }
      let _data = await fetch("/api/razorpay", {
        method: "POST",
        body: JSON.stringify({ target: targetSubscriber }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      _data = await _data.json();
      var _options = {
        key: process.env.API_KEY, // Enter the Key ID generated from the Dashboard

        name: "GrowwTen",
        description: "Youtube Subscription",
        image: Logo.src,
        amount: _data.amount,
        order_id: _data.id,
        currency: _data.currency,
        handler: async function (response) {
          // console.log(response.razorpay_payment_id);
          // console.log(response.razorpay_order_id);
          // console.log(response.razorpay_signature);
          const totalAmount = _data.amount / 100;
          const data = await getDoc(doc(db, "pricing", "youtube_subscription"));
          if (exist) {
            await updateDoc(doc(db, "wallets", referralCode), {
              referralEarning: increment(
                (totalAmount * data.data().referralPercentage) / 100
              ),
            });
            const result = await getDoc(doc(db, "users", referralCode));
            if (result.data().teamNo === 1) {
              await updateDoc(doc(db, "wallets", result.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    100
                ),
              });
            } else if (result.data().teamNo === 2) {
              await updateDoc(doc(db, "wallets", result.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    2 /
                    100
                ),
              });
              const result1 = await getDoc(
                doc(db, "users", result.data().referralCode)
              );

              await updateDoc(doc(db, "wallets", result1.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    2 /
                    100
                ),
              });
            } else if (result.data().teamNo === 3) {
              await updateDoc(doc(db, "wallets", result.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    2 /
                    100
                ),
              });
              const result1 = await getDoc(
                doc(db, "users", result.data().referralCode)
              );
              await updateDoc(doc(db, "wallets", result1.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    4 /
                    100
                ),
              });
              const result2 = await getDoc(
                doc(db, "users", result1.data().referralCode)
              );
              await updateDoc(doc(db, "wallets", result2.data().referralCode), {
                referralEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage) /
                    4 /
                    100
                ),
              });
            }
          } else {
            await updateDoc(
              doc(db, "wallets", "GjEKpoUitjbmVfjmUE3hk1LELAE2"),
              {
                directEarning: increment(
                  (totalAmount *
                    data.data().totalReferralDistributionPercentage *
                    2) /
                    100
                ),
              }
            );
            // await axios.post("/api/referralearning", {
            //   id: referralCode,
            //   isReferral: false,
            //   type: "YOUTUBE SUBSCRIBE",

            //   totalAmount: data.amount,
            // });
          }
          await updateDoc(doc(db, "clients", userInfo.id), {
            tasks: increment(1),
          });
          await setDoc(doc(db, "tasks", response.razorpay_order_id), {
            clientId: userInfo.id,
            paymentId: response.razorpay_payment_id,
            paymentSignature: response.razorpay_signature,
            target: Number(targetSubscriber),
            type: "YOUTUBE SUBSCRIBE",
            url: link,
            completed: 0,
            isCompleted: false,
            price: 0.6 * Number(targetSubscriber),
            createdAt: serverTimestamp(),
            referralCode,
          });

          alert.success("Added successfully");
          setLoading1(false);

          await getClientTasks();
          setShowAddTaskModal(false);
        },
        prefill: {
          name: userInfo.displayName,
          email: userInfo.email,
        },
        notes: {
          address: "GrowwTen",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(_options);
      paymentObject.open();
      paymentObject.on("payment.failed", function (response) {
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        alert.success("Payment Failed");
        setLoading1(false);

        // await getClientTasks();
        setShowAddTaskModal(false);
      });
    } catch (e) {}
  };

  const alert = useAlert();

  const {
    loginAs,
    setLoginAs,
    showAddTaskModal,
    setShowAddTaskModal,

    setReferrerTeamNo,
    referrerTeamNo,
  } = useContext(UtilityContext);
  const { loading, user, userInfo } = useContext(AuthContext);

  const [loading1, setLoading1] = useState(false);
  const [price, setPrice] = useState(targetSubscriber * 0.6);
  const [taskType, setTaskType] = useState("");
  const [link, setlink] = useState("");
  const [targetSubscriber, setTargetSubscriber] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const [rzp1, setRzp1] = useState();
  const [options, setOptions] = useState("");
  useEffect(() => {
    // displayRazorPay();
  }, []);
  // useEffect(() => {
  //   var _options = {
  //     key: "", // Enter the Key ID generated from the Dashboard
  //     amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     currency: "INR",
  //     name: "GrowwTen",
  //     description: "Youtube Subscription",
  //     image: Logo.src,
  //     order_id: "order_9A33XWu170gUt", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature);
  //     },
  //     prefill: {
  //       name: userInfo.displayName,
  //       email: userInfo.email,
  //       contact: userInfo.phoneNo,
  //     },
  //     notes: {
  //       address: "GrowwTen",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   setOptions(_options);
  // }, [price]);
  // useEffect(() => {
  //   var rzp = new Razorpay(options);
  //   setRzp1(rzp);
  // }, [options]);
  // useEffect(() => {
  //   rzp1.on("payment.failed", function (response) {
  //     alert(response.error.code);
  //     alert(response.error.description);
  //     alert(response.error.source);
  //     alert(response.error.step);
  //     alert(response.error.reason);
  //     alert(response.error.metadata.order_id);
  //     alert(response.error.metadata.payment_id);
  //   });
  // }, [rzp1]);

  const refferalCodeExist = async () => {
    if (referralCode.includes("/")) {
      return;
    }
    const data = await getDoc(doc(db, "users", referralCode));
    console.log("data exist", data.exists());
    return data.exists();
  };
  const checkYoutubeLink = async () => {
    // link += "/";
    const urlArray = link.split("/");
    const channelId = urlArray[urlArray.length - 1];
    const { data } = await request("/channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    console.log(data.pageInfo.totalResults);
    return data.pageInfo.totalResults;
  };
  const addTask = async (e) => {
    e.preventDefault();

    await displayRazorPay();
  };
  return (
    <div className="container modal fixed md:top-1/2 top-1/2 left-1/2 bg-white   z-50 transform -translate-y-1/2 -translate-x-1/2 rounded-md  md:p-7 p-6  shadow-2xl border-textDark w-min">
      <svg
        onClick={() => setShowAddTaskModal(false)}
        className={`cursor-pointer absolute top-2.5 right-2.5`}
        fill="#F25724"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="24px"
        height="24px"
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>

      <form
        className="grid space-y-3 justify-center items-center mt-4 md:w-auto w-min"
        onSubmit={(e) => addTask(e)}
      >
        <input
          className="bg-secondary bg-opacity-5 px-3 py-1.5 rounded-md placeholder-gray-500 outline-none md:w-auto w-min"
          type="url"
          placeholder="Enter Youtube channel link"
          required
          value={link}
          onChange={(e) => {
            setlink(e.target.value);
          }}
        />
        <input
          required
          min="1000"
          className="bg-secondary bg-opacity-5 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none md:w-auto w-min"
          type="number"
          placeholder="Enter Target Subsriber"
          value={targetSubscriber}
          onChange={(e) => {
            setTargetSubscriber(e.target.value);
          }}
        />
        <input
          className="bg-secondary bg-opacity-5 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none md:w-auto w-min"
          type="text"
          placeholder="Enter ReferralCode (Optional)"
          value={referralCode}
          onChange={(e) => {
            setReferralCode(e.target.value);
          }}
        />
        {loading1 ? (
          <_Loader />
        ) : (
          <button className="text-white bg-primary py-1.5 px-16 rounded-md ">
            Add Task
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTaskModal;
