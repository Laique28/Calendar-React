import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);



  useEffect(() => {





    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }


  return (

    <div className="border border-black flex flex-col bg-zinc-300 rounded-2xl">
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        <header className="flex flex-col items-center p-8 pr-10 pl-10">
          {rowIdx === 0 && (
            <p className="text-3xl mt-1 text-blue-900 font-semibold">
              {day.format("ddd").toUpperCase()}
            </p>
          )}
          <p
            className={`text-xl p-1 my-1 md:p-0 text-center font-medium text-stone-950 ${getCurrentDayClass()}`}
          >
            {day.format("DD")}
          </p>
        </header>
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 ml-3 text-lg text-center text-black  rounded mb-1 truncate`}
          >
            {evt.cname}
          </div>
        ))}
      </div>
    </div>
  );
}
