import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";
import _Loader from "../../components/Loader";
import TaskCard from "../../components/TaskCard";
import UserHeader from "../../components/UserHeader";
import request from "../../lib/api";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { UtilityContext } from "../../lib/store/UtiltyStore";
const Tasks = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const { showAddTaskModal, setShowAddTaskModal } = useContext(UtilityContext);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [type, setType] = useState("");
  const [taskMode, setTaskMode] = useState("PENDING");
  useEffect(() => {
    setType(window.localStorage.getItem("type"));
  }, [type]);
  // const [_window, _setWindow] = useState("");
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
    // console.log("doneee", data.exists());
    return data.exists();
  };

  const getClientTasks = async () => {
    // console.log("clled client");
    setLoading1(true);
    const dataSnap = await getDocs(
      query(
        collection(db, "tasks"),
        where("clientId", "==", userInfo.id),
        limit(10)
      )
    );
    // console.log("clientTasks", dataSnap.docs.length);
    setLoading1(false);
    dataSnap.docs.forEach((_doc) => {
      setTasks([...tasks, _doc.data()]);
    });
  };
  const getUserTasks = async () => {
    // let _tasks = [];
    // console.log("client");
    setLoading1(true);
    const dataSnap = await getDocs(
      query(
        collection(db, "tasks"),
        where("isCompleted", "==", false),
        limit(10)
      )
    );

    // console.log("dataSnapSSSS", dataSnap.docs);

    Promise.all(
      dataSnap.docs.map(async (_doc) => {
        const urlArray = _doc.data().youtubeUrl.split("/");
        const channelId = urlArray[urlArray.length - 1];
        console.log("doc", _doc.data());
        const _data = await isTaskDone(_doc.id);
        let isSubscribed = await _isSubscribed(channelId);
        console.log("isSubscribe", isSubscribed, "channelId", channelId);
        if (!isSubscribed && _data) {
          console.log("_data and not subscibed", _data);

          await deleteDoc(doc(db, `users/${userInfo.id}/tasks`, _doc.id));
          await updateDoc(doc(db, "tasks", _doc.id), {
            completed: increment(-1),
          });
        } else if (!_data) {
          if (isSubscribed) {
            await setDoc(doc(db, `users/${userInfo.id}/tasks`, _doc.id), {
              status: true,
            });
            await updateDoc(doc(db, "tasks", _doc.id), {
              completed: increment(1),
            });
          } else {
          }
        }
        return { ..._doc.data(), isSubscribed };
      })
    ).then((__data) => {
      if (taskMode === "PENDING") {
        setTasks(() => __data.filter((_task) => _task.isSubscribed === 0));
      } else setTasks(() => __data.filter((_task) => _task.isSubscribed === 1));

      setLoading1(false);
    });
  };
  useEffect(() => {
    if (type === "USER") getUserTasks();
    if (type === "CLIENT" && userInfo) getClientTasks();
  }, [type, userInfo, taskMode]);

  // const openWindow = (url) => {
  //   const __window = window.open(url, "_blank", true, true, true, 300, 500);
  //   _setWindow(__window);
  // };
  // useEffect(() => {
  //   console.log("__window", _window.closed);
  // }, [_window.closed]);

  if (user && userInfo)
    return (
      <>
        <UserHeader />
        {showAddTaskModal && <AddTaskModal />}
        <div className="grid px-7 mt-32  gap-4  w-full ">
          <div className="flex justify-between items-center mb-4  w-full flex-wrap gap-4">
            <div>
              <button
                className="px-3 py-2 rounded-l-md bg-textDark text-white shadow-2xl border border-textDark "
                onClick={() => setTaskMode("PENDING")}
              >
                Pending Tasks
              </button>
              <button
                className="px-3 py-2 rounded-r-md border border-textDark  bg-white text-textDark shadow-2xl "
                onClick={() => setTaskMode("COMPLETED")}
              >
                Completed Tasks
              </button>
            </div>
            {type === "USER" && (
              <button
                className="px-3 py-2 rounded-md bg-textDark text-white shadow-2xl border border-textDark  "
                onClick={() => {
                  setTasks([]);
                  getUserTasks();
                }}
              >
                Refresh Tasks
              </button>
            )}
            {type === "CLIENT" && (
              <button
                onClick={() => setShowAddTaskModal(true)}
                className="text-white bg-darkBlue    
         py-1.5 px-16 rounded-md"
              >
                Add Task
              </button>
            )}
          </div>
          {loading1 && (
            <div className="mx-auto w-20">
              <_Loader />
            </div>
          )}
          {!loading1 && !tasks.length && (
            <h2 className="text-center text-textDark">
              {" "}
              {taskMode === "PENDING"
                ? "No pending tasks available"
                : "No Completed tasks available"}
            </h2>
          )}
          <div className="flex flex-wrap gap-3 w-full">
            {tasks &&
              tasks.map((task, index) => (
                <TaskCard
                  channelName="GrowwTen"
                  isSubsribed={task.isSubscribed}
                  img="https://avatars.githubusercontent.com/u/23244943?v=4"
                  youtubeUrl={task.youtubeUrl}
                />
              ))}
          </div>
          {/* <table className="border">
              <thead>
                <tr>
                  <th>Task Type</th>
                  <th>Channel URL</th>
                  {type === "CLIENT" && (
                    <>
                      <th>Completed</th>
                      <th>Target</th>
                    </>
                  )}
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
                  tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.type}</td>
                      <td className="cursor-pointer">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={task.youtubeUrl}
                        >
                          {type === "CLIENT" ? task.youtubeUrl : "Subscribe"}
                        </a>
                      </td>
                      {type === "USER" && (
                        <td>
                          {task.isSubscribed ? "Subscribed" : "Not Subscribed"}
                        </td>
                      )}
                      {type == "CLIENT" && (
                        <>
                          <td>{task.completed}</td>
                          <td>{task.target}</td>
                          <td>
                            {task.isCompleted ? "Completed" : "Not Completed"}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table> */}
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
