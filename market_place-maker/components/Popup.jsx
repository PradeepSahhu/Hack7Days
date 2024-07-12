import { useRef } from "react";

export default function Popup({ setShowPopup }) {
  const refElement = useRef();

  const refereceModal = (e) => {
    if (refElement.current == e.target) {
      setShowPopup(false);
    }
  };

  return (
    <div
      ref={refElement}
      onClick={refereceModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button
          className="place-self-end"
          onClick={() => setShowPopup(false)}
        ></button>
        <div className="bg-black rounded-xl flex flex-col px-20 py-10 gap-5 items-center">
          <h1 className="text-2xl font-extrabold text-white ">
            New friend added
          </h1>
          <button
            className="px-10 py-5 bg-blue-900 rounded-lg"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
