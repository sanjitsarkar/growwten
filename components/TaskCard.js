import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../lib/api";
import YoutubeImage from "./Images/youtube.svg";
const TaskCard = ({
  type = "USER",
  url,
  isSubsribed,
  target,
  completed,
  isCompleted,
  price,
}) => {
  const [channelName, setChannelName] = useState("");
  const [img, setImg] = useState("");
  useEffect(async () => {
    const urlArray = url.split("/");
    const channelId = urlArray[urlArray.length - 1];
    const { data } = await request("/channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    setChannelName(data.items[0].snippet.title);
    setImg(data.items[0].snippet.thumbnails.default.url);
  }, []);
  console.log(YoutubeImage);
  return (
    <div
      className="rounded-lg bg-white shadow-2xl px-6 py-6 grid gap-7 md:w-auto w-screen"
      key={url}
    >
      <div className="flex justify-between w-auto gap-20">
        <div className="flex gap-1">
          <img src={YoutubeImage.src} alt={channelName} />
          <div className="">
            <h1 className="font-black text-3xl text-textDark opacity-80 ">
              YouTube
            </h1>
            <h4 className="text-textDark -mt-1.5 ">Subscription</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 flex-wrap">
        <div className="flex gap-3 items-center">
          <LazyLoadImage
            src={img}
            alt={channelName}
            className="rounded-full border-2 border-youtube border-opacity-70 w-12 shadow-2xl bg-youtube"
          />
          <h2 className="text-textDark font-medium">{channelName}</h2>
        </div>
        {type === "USER" ? (
          <a
            className="rounded-3xl px-4 py-1.5 text-white bg-youtube font-medium shadow-2xl"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {isSubsribed ? "Subscribed" : "Subscribe"}
          </a>
        ) : (
          <a
            className="rounded-3xl px-4 py-1.5 text-white bg-youtube font-medium shadow-2xl"
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {isCompleted ? "Completed" : "Not Completed"}
          </a>
        )}
      </div>
      {type === "CLIENT" && (
        <div className="flex  items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-textDark font-medium text-lg">Target</h2>
            <p className="text-textDark text-sm">{target} Subscribers</p>
          </div>
          <div>
            <h2 className="text-textDark font-medium text-lg">Completed</h2>
            <p className="text-textDark text-sm">
              {completed}/{target} Subscribers
            </p>
          </div>
          <div>
            <h2 className="text-textDark font-medium text-lg">Price</h2>
            <p className="text-textDark text-sm">???{price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
