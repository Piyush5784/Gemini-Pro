function ButtonTypeOne() {
  return (
    <>
      <div style={{ transform: "none" }}>
        <a href="">
          <button className=" relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-3xl shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-3xl bg-gray-950/50 ring-1 ring-white/10 ">
              <span>Chat with Gemini</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </a>
      </div>
    </>
  );
}

export default ButtonTypeOne;
