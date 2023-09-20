import React, { useContext, useState } from "react";
import { topicsContext } from "../../context/TopicContext";
import { ToastContainer, toast } from "react-toastify";
import Home from "../Home/Home";

const AddTopic = () => {
  const { addTopic, getTopics } = useContext(topicsContext);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicDesc, setTopicDesc] = useState("");
  const [topicImg, setTopicImg] = useState("");
  const [topicLib, setTopicLib] = useState("");

  const notify = () => toast.error("Empty");

  const handleClick = () => {
    if (
      !topicTitle.trim() ||
      !topicDesc.trim() ||
      !topicImg.trim() ||
      !topicLib.trim()
    ) {
      notify();
      return;
    }

    let newTopic = {
      topicTitle,
      topicDesc,
      topicImg,
      topicLib,
    };

    addTopic(newTopic);

    setTopicTitle("");
    setTopicDesc("");
    setTopicImg("");
    setTopicLib("");

    getTopics();
  };

  return (
    <div>
      <input
        type="text"
        value={topicTitle}
        onChange={(e) => setTopicTitle(e.target.value)}
        placeholder="название"
      />
      <input
        type="text"
        value={topicDesc}
        onChange={(e) => setTopicDesc(e.target.value)}
        placeholder="описание"
      />
      <input
        type="text"
        value={topicImg}
        onChange={(e) => setTopicImg(e.target.value)}
        placeholder="изображение"
      />
      <input
        type="text"
        value={topicLib}
        onChange={(e) => setTopicLib(e.target.value)}
        placeholder="ссылка"
      />
      <button onClick={handleClick}>Add</button>
      <ToastContainer position="top-center" pauseOnHover={true} />
      <Home />
    </div>
  );
};

export default AddTopic;
