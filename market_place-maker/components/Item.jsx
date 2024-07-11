export default function Item({ itemSrc }) {
  return (
    <div className="flex w-64  absolute items-end">
      <div className="absolute bg-gradient-to-r from-yellow-400 to-red-600 blur-sm -inset-0.5 opacity-75 group-hover:opacity-100 transition duration-200 group-hover:blur-md"></div>
      <div className="rounded-lg bg-white shadow-secondary-1">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat w-50 h-30"
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
      </div>
    </div>
  );
}
