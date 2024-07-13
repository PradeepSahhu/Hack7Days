export default function Registered({ mIndex, mName, mAddress, mDate }) {
  return (
    <div className="flex justify-between items-center my-4 border-b-2 border-yellow-100 hover:bg-gray-700">
      <div>
        <p className={`font-bold mr-2 text-${mIndex < 4 ? "yellow" : "white"}`}>
          {mIndex ? mIndex : "00"}
        </p>
      </div>
      <div className="">
        <img src="./logoLink.png" className="h-8 w-8 mr-1" />
      </div>

      <div>
        <p className="text-yellow-400 font-bold text-xl">
          {mName ? mName : "XXX"}
        </p>
        <p className="text-gray-600 font-extralight text-sm">
          {mAddress ? mAddress : "0x0C5B9B6356D8De9b631F5794F133DE519c6609b7"}
        </p>
      </div>
      <div className="justify-end text-gray-400 ml-8">
        <p className="text-white text-xl">2024-12-10</p>
      </div>
    </div>
  );
}
