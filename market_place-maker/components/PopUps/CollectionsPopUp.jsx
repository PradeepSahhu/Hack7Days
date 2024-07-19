import { useRef } from "react";
import DemoCard from "../Cards/DemoCard";

export default function CollectionsPopUp({
  setShowHomePopUp,
  setShowCollectionsPopUp,
  collections,
  addtheNFT
}) {
  const refElement = useRef();


  

  const handleCollections = () => {
    setShowCollectionsPopUp(false);
    setShowHomePopUp(true);
  };

  const refereceModal = (e) => {
    if (refElement.current == e.target) {
      setShowCollectionsPopUp(false);
    }
  };

  const getImage = (ipfsURL) => {
    const hash = ipfsURL.split("ipfs://")[1];
    return `https://ipfs.io/ipfs/${hash}`;
  };

  return (
    <div
      ref={refElement}
      onClick={refereceModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex "
      //justify-center items-center
    >
      <div className="flex flex-col gap-5 text-white">
        <button
          className="place-self-end"
          onClick={() => setShowHomePopUp(false)}
        ></button>
        <div className="bg-black  rounded-xl flex flex-col px-20 py-10 gap-5 items-center">
          <p className=" font-bold text-xl">Choose NFTs to Add</p>
          <div className="flex justify-between gap-x-5 p-5">
            {/* <DemoCard />
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <DemoCard /> */}
            {collections.slice(0, 5).map((collection, index) => (
              <DemoCard
                key={index}
                onClick={()=>addtheNFT()}
                itemName={collection.name}
                itemSrc={getImage(collection.image)}
                itemDescription={collection.description}
                itemPrice={collection.price}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800">
              View More
              <img src="./arright.png" className="h-8 w-8 inline-block ml-3" />
            </button>
          </div>

          <div className="flex gap-x-4 justify-between">
            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => handleCollections()}
            >
              Go Back
            </button>

            <button
              className="px-10 py-5 bg-blue-900 rounded-lg"
              onClick={() => setShowCollectionsPopUp(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
