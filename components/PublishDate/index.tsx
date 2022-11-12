import React from "react";
import { formatDate } from "utils/dates";

export const PublishDate: React.FC<{ datestring: string }> = ({
  datestring,
}) => {
  return (
    <p className="text-lg text-gray-400 my-4">
      Published on {formatDate(datestring)}.
    </p>
  );
};
