import React, { useEffect, useState } from "react";
import Day from "./Day";
import { useCookies } from 'react-cookie';
export default function Month({ month }) {

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 text-nowrap overflow-auto">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
