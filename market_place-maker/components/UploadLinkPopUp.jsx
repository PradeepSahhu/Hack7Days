import { useRef } from "react";

export default function UploadLinkPopUp({ setShowPopup }) {
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
        <div className="bg-black  rounded-xl flex flex-col px-20 py-10 gap-5 items-center">
          <p className=" font-bold text-xl">Enter the IPFS Link</p>

          <div className=" bg-black text-white grid grid-cols-2 m-10">
            <form className="grid bg-black px-20 py-10  col-start-1 col-end-3 mx-64 rounded-xl">
              <div className="flex justify-center mb-5">
                <p className="text-[3rem] font-bold text-yellow-500 text-transparent">
                  Link Upload
                </p>
              </div>
              <label className="grid col-start-1 col-end-1 ">
                Enter the IPFS LINK
              </label>
              <input
                className="text-white  p-5 rounded-md mx-5 my-5 border-yellow-400 border-2 bg-transparent"
                placeholder=""
              />
            </form>
          </div>
          <button className="px-10 py-5 bg-orange-600 rounded-lg">
            Submit
          </button>

          <div className="flex justify-between">
            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Go Back
            </button>
            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
