export default function DemoCard({
  itemName,
  itemSrc,
  itemDescription,
  itemPrice,
  mintNFTFunction,
  URI,
}) {
  const getTruncatedDescription = (description, wordLimit) => {
    if (!description) return "Some quick example text to build";
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="inline-block w-52 ">
      <div className="rounded-lg bg-orange-100 shadow-secondary-1">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat w-full"
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
          <h5 className="mb-2 text-xl font-medium leading-tight bg-gradient-to-r from-green-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            {itemName ? itemName : "Content Title"}
          </h5>
          <p className="mb-2 text-base text-center">
            {getTruncatedDescription(itemDescription, 10)}
          </p>
          <div className="w-full">
            <hr className="h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>
          <div className=" flex justify-center">
            <p className=" bg-gray-200 rounded-xl">
              {itemPrice ? itemPrice : "xxx"} Tokens
            </p>
          </div>
          <div className="w-full">
            <hr className="w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>

          <button
            type="button"
            className="rounded-2xl mt-3 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal text-white shadow-primary-3  bg-gradient-to-r from-red-600 to-blue-700 shadow-xl shadow-slate-900"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Add NFT
          </button>
        </div>
      </div>
    </div>
  );
}
