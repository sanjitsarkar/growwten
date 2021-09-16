import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import request from "../../lib/api";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
const Tasks = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [tasks, setTasks] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  const _isSubscribed = async (channelId) => {
    try {
      const token = window.sessionStorage.getItem("ytc-access-token");
      //  console.log("toooken", token);
      const { data } = await request.get("/subscriptions", {
        params: {
          part: "snippet",
          forChannelId: channelId,
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("data", data);
      return data.pageInfo.totalResults;
    } catch (e) {
      console.log(e);
      return 0;
    }
  };
  // const refreshStatus = ()=>{

  //                           const urlArray = task.youtubeUrl.split("/");
  //                           const channelId = urlArray[urlArray.length - 1];
  //                           let isSubscribed = await _isSubscribed(channelId);
  //                           if (isSubscribed) {
  //                             isSubscribed = "Subscribed";
  //                           } else {
  //                             isSubscribed = "Not Subscribed";
  //                           }
  //                           const elementIdx = tasks.find(
  //                             (_task) => _task.youtubeUrl === task.youtubeUrl
  //                           );
  //                           let newTasks = [...tasks];
  //                           newTasks[elementIdx] = {
  //                             ...newTasks[elementIdx],
  //                             isSubscribed,
  //                           };
  //                           setTasks(newTasks);
  //                         }}
  const isTaskDone = async (taskId) => {
    const data = await getDoc(
      doc(db, "users", `${userInfo.id}/tasks/${taskId}`)
    );
    console.log("doneee", data.exists());
    return data.exists();
  };
  const getTasks = async () => {
    setLoading1(true);
    const dataSnap = await getDocs(
      query(collection(db, "tasks"), where("isCompleted", "==", false))
    );

    // console.log("dataSnap", dataSnap);

    dataSnap.docs.forEach(async (_doc) => {
      const urlArray = _doc.data().youtubeUrl.split("/");
      const channelId = urlArray[urlArray.length - 1];
      console.log("channelId", channelId);
      const _data = await isTaskDone(_doc.id);
      if (!_data) {
        console.log("_data", _data);
        let isSubscribed = await _isSubscribed(channelId);
        if (isSubscribed) {
          isSubscribed = "Subscribed";
          await updateDoc(doc(db,"tasks",_doc.id),{
            completed:increment(1)
          })
          await setDoc(doc(db, `users/${userInfo.id}/tasks`, _doc.id), {
            status: true,
          });
        } else {
          isSubscribed = "Not Subscribed";
          console.log("isSubscribed", isSubscribed);
          console.log("...doc", _doc);

          setTasks([...tasks, { ..._doc.data(), isSubscribed }]);
        }
      }
    });
    setLoading1(false);
  };
  useEffect(() => {
    if (userInfo) getTasks();
  }, [userInfo]);
  useEffect(() => {
    console.log("Taskssss", tasks);
  }, [tasks]);
  if (user && userInfo)
    return (
      <>
        <UserHeader />
        <div className="flex mt-36 m-7 gap-4 justify-center w-max md:w-auto md:mx-auto">
          <div className=" relative   rounded-sm shadow-2xl   p-7">
            <div className="flex justify-between items-center mb-6">
              <h1 className="">Pending Tasks</h1>
              <button
                className="px-2 py-1 rounded-md bg-secondary text-white shadow-xl"
                onClick={() => {
                  setTasks([]);
                  getTasks();
                }}
              >
                Refresh Tasks
              </button>
            </div>
            <table className="border-2">
              <thead>
                <tr>
                  <th>Task Type</th>
                  <th>Channel URL</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loading1 && (
                  <tr>
                    <td colSpan="5">
                      <_Loader />
                    </td>
                  </tr>
                )}
                {!tasks.length && (
                  <tr>
                    <td colSpan="5"> No pending tasks available</td>
                  </tr>
                )}
                {tasks &&
                  tasks.map((task) => (
                    <tr key={task.youtubeUrl}>
                      <td>{task.type}</td>
                      <td className="cursor-pointer">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={task.youtubeUrl}
                        >
                          {task.youtubeUrl}
                        </a>
                      </td>
                      <td>{task.isSubscribed}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Tasks;
