import React from "react";

const ActivatedAt = () => {
  const activatedAt = new Date();
  const mins =
    activatedAt.getMinutes() < 10
      ? "0" + activatedAt.getMinutes()
      : "" + activatedAt.getMinutes();
  const hours = "" + activatedAt.getHours();
  const startedAt = hours + " : " + mins;
  return (
    <div>
      <span>Session started at: {startedAt}</span>
    </div>
  );
};

export default ActivatedAt;
