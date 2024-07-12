import { useRef } from "react";
import DemoCard from "./DemoCard";

export default function CollectionsPopUp({
  setShowHomePopUp,
  setShowCollectionsPopUp,
}) {
  const refElement = useRef();

  const handleUpload = () => {
    setShowHomePopUp(false);
    setShowUploadLink(true);
  };

  const refereceModal = (e) => {
    if (refElement.current == e.target) {
      setShowCollectionsPopUp(false);
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
          onClick={() => setShowHomePopUp(false)}
        ></button>
        <div className="bg-black  rounded-xl flex flex-col px-20 py-10 gap-5 items-center">
          <p className=" font-bold text-xl">Choose NFTs to Add</p>
          <div className="flex justify-between gap-x-5 p-5">
            <DemoCard />
          </div>

          <button
            className="px-10 py-5 bg-blue-900 rounded-lg"
            onClick={() => setShowCollectionsPopUp(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
