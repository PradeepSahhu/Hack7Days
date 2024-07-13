export default function Organization({
  setName,
  setPerTokenAmount,
  addNewMarketPlace,
}) {
  return (
    <div className=" bg-black text-white grid grid-cols-2 m-10">
      <form className="grid bg-black px-20 py-10  col-start-1 col-end-3 mx-64 rounded-xl">
        <div className="flex justify-center mb-5">
          <p className="text-[3rem] font-bold text-yellow-500 text-transparent">
            NFT MarketPlace Details
          </p>
        </div>
        <label className="grid col-start-1 col-end-1 ">
          Enter the NFT Marketplace Name
        </label>
        <input
          className="text-white  p-5 rounded-md mx-5 my-5 border-yellow-400 border-2 bg-transparent focus:border-yellow-400 focus:text-white focus:outline-none"
          placeholder="Enter the NFT Marketplace Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="grid col-start-1 col-end-1 ">
          Enter the Initial Per Token Amount
        </label>
        <input
          className="text-white  p-5 rounded-md mx-5 my-5 border-yellow-400 border-2 bg-transparent focus:border-yellow-400 focus:text-white focus:outline-none"
          placeholder=" Enter the Initial Per Token Amount"
          onChange={(e) => setPerTokenAmount(e.target.value)}
        />
      </form>

      <div className="flex justify-center col-span-2 items-center py-5">
        <button
          className="bg-yellow-400 p-5 rounded-xl hover:bg-rose-900"
          onClick={addNewMarketPlace}
        >
          Register
        </button>
      </div>
    </div>
  );
}
