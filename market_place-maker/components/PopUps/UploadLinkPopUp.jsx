import { useRef } from "react";

export default function UploadLinkPopUp({
  setShowHomePopUp,
  setShowUploadLink,
  setUploadString,
  uploadLink,
}) {
  const refElement = useRef();

  const handleClose = () => {
    setShowUploadLink(false);
    setShowHomePopUp(true);
  };

  const refereceModal = (e) => {
    if (refElement.current == e.target) {
      setShowUploadLink(false);
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
          onClick={() => setShowUploadLink(false)}
        ></button>
        <div className="bg-black  rounded-xl flex flex-col px-20 py-10  items-center">
          <div className="flex justify-center">
            <p className="text-[3rem] font-bold text-yellow-500 text-transparent">
              Link Upload
            </p>
          </div>

          <div className=" bg-black text-white grid grid-cols-2">
            <form className="grid bg-black px-20 py-5  col-start-1 col-end-3  rounded-xl">
              <label className="grid col-start-1 col-end-1 ">
                Enter the IPFS LINK
              </label>
              <input
                className="text-white  p-5 rounded-md mx-5 my-2  border-yellow-400 border-2 bg-transparent focus:outline-none"
                placeholder="Enter the IPFS LINK OF YOUR JSON"
                onChange={(e) => setUploadString(e.target.value)}
              />
            </form>
          </div>
          <button
            className="px-10 py-5 bg-orange-600 rounded-lg mb-5"
            onClick={uploadLink}
          >
            Submit
          </button>

          <div className="flex justify-between gap-x-10">
            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => handleClose()}
            >
              Go Back
            </button>
            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => setShowUploadLink(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
