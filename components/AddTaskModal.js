import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { useAlert } from "react-alert";
import { db } from "../lib/firebase";
import { AuthContext } from "../lib/store/AuthStore";
import { UtilityContext } from "../lib/store/UtiltyStore";
import _Loader from "./Loader";
const AddTaskModal = ({ getClientTasks }) => {
  const alert = useAlert();

  const {
    loginAs,
    setLoginAs,
    showAddTaskModal,
    setShowAddTaskModal,
    referralCode,
    setReferralCode,
    setReferrerTeamNo,
    referrerTeamNo,
  } = useContext(UtilityContext);
  const { loading, user, userInfo } = useContext(AuthContext);

  const [loading1, setLoading1] = useState(false);
  const [price, setPrice] = useState(targetSubscriber * 0.6);
  const [taskType, setTaskType] = useState("");
  const [link, setlink] = useState("");
  const [targetSubscriber, setTargetSubscriber] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    setLoading1(true);
    await addDoc(collection(db, "tasks"), {
      clientId: userInfo.id,
      target: Number(targetSubscriber),
      type: "YOUTUBE SUBSCRIBE",
      url: link,
      completed: 0,
      isCompleted: false,
      price: 0.6 * Number(targetSubscriber),
      createdAt: serverTimestamp(),
    });
    setLoading1(false);
    alert.success("Added successfully");
    await getClientTasks();
    setShowAddTaskModal(false);
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
