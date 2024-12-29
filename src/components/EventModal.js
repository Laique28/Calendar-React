import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useCookies } from "react-cookie";
const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];
export default function EventModal() {
  const [cookies, setCookie, removeCookie] = useCookies(['login']);
  const [admin, setAdmin] = useState('')
  useEffect(() => {
    const login = cookies.login;
    if (login === 'User') {
      setAdmin(false)
    } else if (login === 'Admin') {
      setAdmin(true)
    }

  })
  console.log(admin)
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);
  const [cname, setCName] = useState(
    selectedEvent ? selectedEvent.cname : ""
  );
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const [linkedIn, setLinkedIn] = useState(
    selectedEvent ? selectedEvent.linkedIn : ""
  );
  const [email, setEmail] = useState(
    selectedEvent ? selectedEvent.email : ""
  );
  const [phone, setPhone] = useState(
    selectedEvent ? selectedEvent.phone : ""
  );
  const [comments, setComments] = useState(
    selectedEvent ? selectedEvent.comments : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      cname,
      location,
      linkedIn,
      email,
      phone,
      comments,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center mt-2">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">

          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>

            {selectedEvent && (
              admin && <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              {/* <span className="material-icons-outlined text-gray-400">
                close
              </span> */}
              <span class="material-icons">
                cancel
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          {!admin ? <h1 className="text-center text-2xl bg-red-400 rounded-sm font-medium">Only Admin Can Create Event Informations  </h1> : <></>}
          <div className="grid grid-cols-1/5 items-end gap-y-7">

            <div></div>
            <input
              type="text"
              name="cname"
              placeholder="Add Company Name"
              value={cname}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setCName(e.target.value)}
            />
            {/* <span className="material-icons-outlined text-gray-400">
              schedule
            </span> */}
            <span class="material-icons">
              calendar_month
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span class="material-icons">
              location_on
            </span>



            <input
              type="text"
              name="location"
              placeholder="Add Location"
              value={location}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setLocation(e.target.value)}
            />

            {/* <span className="material-icons-outlined text-gray-400">
              segment
            </span> */}

            <span class="material-icons">
              event
            </span>
            <input
              type="text"
              name="linkedIn"
              placeholder="Add LinkedIn Profile"
              value={linkedIn}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setLinkedIn(e.target.value)}
            />
            {/* <span className="material-icons-outlined text-gray-400">
              segment
            </span> */}

            <span class="material-icons">
              contact_mail
            </span>
            <input
              type="mail"
              name="email"
              placeholder="Add Email"
              value={email}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <span className="material-icons-outlined text-gray-400">
              segment
            </span> */}

            <span class="material-icons">
              phone_iphone
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Add Phone Number"
              value={phone}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* <span className="material-icons-outlined text-gray-400">
              segment
            </span> */}

            <span class="material-icons">
              question_answer
            </span>
            <input
              type="text"
              name="comments"
              placeholder="Add Comments"
              value={comments}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setComments(e.target.value)}
            />
            {/* <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span> */}
            {admin && <>
              <span class="material-icons">
                palette
              </span>
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}

              </div>
            </>}

          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          {admin && <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>}
        </footer>
      </form>
    </div>
  );
}
