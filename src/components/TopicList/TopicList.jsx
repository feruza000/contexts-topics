import React, { useContext, useEffect } from "react";
import { topicsContext } from "../../context/TopicContext";

const TopicList = () => {
  const { topics, getTopics } = useContext(topicsContext);

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
      {topics.map((item) => (
        <div key={item.id}>{item.topicTitle}</div>
      ))}
    </div>
  );
};

export default TopicList;
