export default function Card({
  itemName,
  itemSrc,
  itemDescription,
  itemPrice,
  toMintNFT,
  URI,
}) {
  return (
    <div className="inline-block w-96">
      <div className="rounded-lg bg-white shadow-secondary-1">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat w-full h-80"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={
              itemSrc
                ? itemSrc
                : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            }
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-6 text-surface dark:text-black flex flex-col items-center">
          <h5 className="mb-2 text-2xl font-medium leading-tight bg-gradient-to-r from-green-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            {itemName ? itemName : "Content Title"}
          </h5>
          <p className="mb-2 text-base text-center">
            {itemDescription
              ? itemDescription
              : "Some quick example text to build on the card title and make up the bulk of the cards content."}
          </p>
          <div className="mb-3">
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
            <p className=" bg-gray-200 rounded-xl">
              Item price : {itemPrice ? itemPrice : "xxx"} Tokens
            </p>
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>

          <button
            type="button"
            className="rounded-2xl  px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal text-white shadow-primary-3  bg-gradient-to-r from-red-600 to-blue-700 shadow-xl shadow-slate-900"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            onClick={() => toMintNFT(URI, itemPrice)}
          >
            Redeem NFT
          </button>
        </div>
      </div>
    </div>
  );
}
