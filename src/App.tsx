import {
  ArrowUp,
  AudioLines,
  ChevronDown,
  ChevronUp,
  CirclePause,
  CirclePlay,
  CirclePlus,
  House,
  LaptopMinimal,
  Library,
  Repeat2,
  Search,
  Share,
  Shuffle,
  SkipBack,
  SkipForward,
  SquareLibrary,
} from "lucide-react";
import { Player, PlayerType } from "./Player";
import { useEffect, useState } from "react";

export default function App() {
  const [hover, setHover] = useState<PlayerType | null>(null);
  const [miniPlayer, setMiniPlayer] = useState(false);
  const [player, setPlayer] = useState(false);

  const toggleMiniPlayer = () => {
    setMiniPlayer(!miniPlayer);
  };

  const togglePlayer = () => {
    setPlayer(!player);
  };

  const clickOutside = (event: MouseEvent) => {
    const button = document.getElementById("toggle-button");
    if (button && !button.contains(event.target as Node)) {
      setMiniPlayer(false);
      setPlayer(false);
    }
  };

  useEffect(() => {
    // Attach event listener to document
    document.addEventListener("mousedown", clickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 bg-zinc-50">
      <div className="w-full relative overflow-hidden max-w-[393px] h-[760px] rounded-[50px] bg-[#070707ee] border-[6px] border-black ring-4 ring-[#b7b5a8]">
        {/*The main big container */}
        <div className="w-full h-full relative flex flex-col items-center justify-start bg-[#121212]">
          {/*For background color */}
          {Player.map((player, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                hover === player ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: player.linearGradient,
                opacity: hover === player ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            ></div>
          ))}

          {/*Top Buttons */}
          <div className="pt-14 flex items-end justify-start w-full pb-2 px-3 gap-2 h-[110px] z-[2] ">
            <img
              src="/profile.jpg"
              alt=""
              className="size-8 rounded-full bg-green-50 object-cover"
            />
            <button className="bg-[#27d760] text-[#333333] text-sm px-4 py-1.5 rounded-full">
              All
            </button>
            <button className="bg-[#333333] text-[#ffffff] text-sm px-4 py-1.5 rounded-full">
              Music
            </button>
            <button className="bg-[#333333] text-[#ffffff] text-sm px-4 py-1.5 rounded-full">
              Podcasts
            </button>
          </div>

          {/* Name & image card */}
          <div className="w-full relative flex flex-col items-center gap-5 justify-start h-[calc(100%-202px)] overflow-y-scroll pt-1 px-3 pb-2 z-[2]">
            <div className="w-full grid grid-cols-2 gap-2">
              {Player.map((player, index) => (
                <div
                  onMouseEnter={() => setHover(player)}
                  onMouseLeave={() => setHover(null)}
                  className="flex items-center justify-start w-full py-4 gap-2 bg-[#2a2a2a] rounded-md overflow-hidden h-12 cursor-pointer"
                  key={index}
                >
                  <img
                    src={player.avatar}
                    alt=""
                    className="size-12 bg-[#2f2f2f] object-cover"
                  />
                  <div className="h-12 w-full flex items-center justify-start py-1 pr-1 custom-cursor-on-hover">
                    <p className="text-white text-xs font-semibold text-left">
                      {player.name}
                    </p>
                    {/* Show sound wave only for the first player */}
                    {index === 0 && ( // Condition to check if it's the first player
                      <div className="flex gap-0.5 is-playing ml-6">
                        <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                        <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                        <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Blue avatar */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar9.svg"
                  alt=""
                  className="size-16 rounded-full bg-zinc-600 object-cover"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm text-white/50">Last release of</span>
                  <span className="text-white text-xl font-semibold">
                    Sahil
                  </span>
                </div>
              </div>

              {/* Big image container */}
              <div className="flex items-center justify-start w-full py-4 gap-3 bg-[#2a2a2a] rounded-lg overflow-hidden h-36">
                <img
                  src="/profile.jpg"
                  alt=""
                  className="size-36 bg-[#2f2f2f] object-cover"
                />
                <div className="w-full flex flex-col gap-8 items-start justify-start py-3 pr-3">
                  <div>
                    <p className="text-white text-sm font-semibold text-left">
                      MTA
                    </p>
                    <p className="text-white/50 text-sm font-semibold text-left">
                      Single • Lortex
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <CirclePlus size={28} color="#ffffff80" />
                    <CirclePlay size={32} color="#fff" />
                  </div>
                </div>
              </div>
            </div>

            {/* Player container */}
            <div
              className="absolute bottom-0 w-full flex items-center justify-center px-4"
              onClick={togglePlayer}
              id="toggle-button"
            >
              <div
                className="w-full bg-[#354f47] p-2 flex items-center gap-3 relative cursor-pointer custom-cursor-on-hover"
                style={{ opacity: 1, borderRadius: "8px" }}
              >
                <img
                  src="/avatar10.svg"
                  alt=""
                  className="size-12 bg-slate-950 object-cover"
                  style={{ opacity: 1, borderRadius: "6px" }}
                />
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-center justify-start gap-1">
                    <span
                      className="text-white text-xs font-semibold"
                      style={{ opacity: 1 }}
                    >
                      Conviction
                    </span>
                    <span
                      className="text-white/50 text-xs font-semibold"
                      style={{ opacity: 1 }}
                    >
                      • Lucidious
                    </span>
                  </div>
                  <span className="flex items-center text-green-600 text-xs font-semibold">
                    <span className="mr-1">
                      <AudioLines size={14} />
                    </span>
                    <span style={{ opacity: 1 }}>LN MacBook Pro</span>
                  </span>
                </div>
                <div className="flex items-center gap-4 pr-2 custom-cursor-on-hover">
                  <div style={{ opacity: 1 }}>
                    <LaptopMinimal size={28} color="#16a34a" />
                  </div>
                  <div style={{ opacity: 1 }}>
                    <CirclePause size={26} color="#ffffff" />
                  </div>
                </div>

                <div className="flex items-center justify-center px-2 absolute bottom-0 left-0 right-0">
                  <div
                    className="relative h-[3px] w-full bg-[#868686] bottom-0"
                    style={{ opacity: 1, borderRadius: "999px" }}
                  >
                    <div
                      className="absolute h-[3px] w-[30%] bg-[#fff]"
                      style={{ borderRadius: "999px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {player && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
              <div
                className="w-full h-full bg-[#354f47] flex flex-col items-center gap-2 relative p-4 pt-16"
                style={{
                  borderRadius: "0px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <div className="w-full flex items-center justify-between gap-2">
                  <button>
                    <ChevronDown size={26} color="#fff" />
                  </button>
                  <p className="text-white font-semibold text-sm">SS Coding</p>
                  <button>
                    <ChevronUp size={26} color="#fff" />
                  </button>
                </div>

                <img
                  src="/avatar10.svg"
                  alt=""
                  className="mt-6 mb-4 bg-slate-950 object-cover cursor-pointer"
                  style={{
                    height: "349px",
                    width: "349px",
                    borderRadius: "8px",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  }}
                />

                <div className="w-full flex flex-col items-start justify-start gap-0">
                  <span
                    className="text-white text-xl font-semibold"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    Conviction
                  </span>
                  <span
                    className="text-white/50 text-xl font-semibold"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    Lucidious
                  </span>
                </div>

                <div
                  className="relative h-[3px] w-full bg-[#868686] mb-0 mt-2"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    borderRadius: "999px",
                  }}
                >
                  <div
                    className="absolute h-[3px] w-[30%] bg-[#fff]"
                    style={{ borderRadius: "999px" }}
                  >
                    <div
                      className="absolute size-4 bg-white right-0 top-1/2 -translate-y-1/2"
                      style={{ borderRadius: "999px" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full">
                  <span className="text-white/50 text-xs">1:23</span>
                  <span className="text-white/50 text-xs">-2:45</span>
                </div>

                <div className="flex items-center justify-between gap-1 w-full text-white mb-3">
                  <Shuffle size={22} />
                  <div className="flex items-center">
                    <SkipBack size={30} />
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    <CirclePause size={50} />
                  </div>
                  <div className="flex items-center">
                    <SkipForward size={30} />
                  </div>
                  <Repeat2 size={22} color="#16a34a" />
                </div>

                <div className="flex items-cenetr justify-between gap-1 w-full">
                  <span className="flex items-center text-green-600 text-xs font-semibold">
                    <span
                      className="mr-1"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <LaptopMinimal size={14} />
                    </span>
                    <span
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      SS MacBook Pro
                    </span>
                  </span>
                  <div
                    className="flex items-center gap-4"
                    style={{ opacity: 1, willChange: "auto" }}
                  >
                    <Share size={22} color="#fff" />
                    <SquareLibrary size={22} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Icon container */}
          <div className="flex items-center justify-center w-full pb-10 pt-4 px-4 gap-2 h-[92px] z-[2]">
            <button className="flex flex-col items-center justify-center gap-1 w-full">
              <House color="white" size={26} />
              <span className="text-white text-sm">Home</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 w-full">
              <Search color="#b3b3b3" size={26} />
              <span className="text-[#b3b3b3] text-sm">Search</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 w-full">
              <Library color="#b3b3b3" size={26} />
              <span className="text-[#b3b3b3] text-sm">Library</span>
            </button>
          </div>
        </div>

        {/* Dynamic island */}
        <div
          className="rounded-full bg-black h-8 w-32 absolute flex items-center justify-between px-2 top-3 py-1.5 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
          style={{ width: "128px", opacity: 1, willChange: "auto" }}
          onClick={toggleMiniPlayer}
          id="toggle-button"
        >
          <img
            src="/profile.jpg"
            alt=""
            className="size-5 rounded-md bg-green-50 object-cover"
          />
          <div className="flex gap-0.5 is-playing">
            <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
            <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
            <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
          </div>
        </div>

        {/* Dynamic island mini player*/}
        {miniPlayer && (
          <>
            <div className="absolute inset-0 w-full h-full flex items-start justify-center z-30">
              <div
                className=" bg-black absolute mt-3 overflow-hidden w-[95%]"
                style={{
                  borderRadius: "32px",
                  width: "95%",
                  height: "auto",
                  willChange: "auto",
                }}
              >
                <div
                  className="p-3 pb-5 w-full flex flex-col justify-center items-center h-full gap-4"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    borderRadius: "0.00106829% / 0.0042736%",
                  }}
                >
                  <div className="w-full flex items-center justify-start gap-2 pr-4">
                    <img
                      src="/avatar10.svg"
                      alt=""
                      className="size-[72px] bg-slate-950 object-cover"
                      style={{
                        borderRadius: "18px",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    />
                    <div className="w-full flex flex-col items-start gap-0">
                      <div className="flex items-center justify-start gap-1">
                        <span
                          className="text-white text-md font-semibold"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          Conviction
                        </span>
                        <span
                          className="text-white text-md font-semibold"
                          style={{
                            transform: "none",
                            transformOrigin: "50% 50% 0px",
                          }}
                        >
                          • Lucidious
                        </span>
                      </div>
                      <span
                        className="text-white/50 font-semibold text-sm line-clamp-1"
                        style={{
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        Listening on SS MacBook Pro
                      </span>
                    </div>
                    <div className="flex gap-0.5 is-playing">
                      <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                      <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                      <div className="w-0.5 h-2.5 bg-[#27d760]"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className="text-white/50 text-xs block">1:23</span>
                    <div
                      className="relative h-[3px] w-full bg-[#868686]"
                      style={{
                        borderRadius: "999px",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <div
                        className="absolute h-[3px] w-[30%] bg-[#fff]"
                        style={{ borderRadius: "999px" }}
                      ></div>
                    </div>
                    <span className="text-white/50 text-xs block">-2:45</span>
                  </div>

                  <div className="flex items-center justify-center gap-3 w-full text-white">
                    <div
                      className="flex items-center"
                      style={{
                        opacity: 1,
                        willChange: "auto",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <SkipBack size={30} />
                    </div>
                    <div
                      className="flex items-center"
                      style={{
                        opacity: 1,
                        willChange: "auto",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <CirclePause size={50} />
                    </div>
                    <div
                      className="flex items-center"
                      style={{
                        opacity: 1,
                        willChange: "auto",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <SkipForward size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 z-20 backdrop-blur-xl"
              style={{ opacity: 1, willChange: "auto" }}
            ></div>
          </>
        )}

        {/* Back button */}
        <div className="rounded-full bg-white h-1 w-44 absolute bottom-3 left-1/2 -translate-x-1/2 z-[50] cursor-pointer"></div>
      </div>
    </main>
  );
}
