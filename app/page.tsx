"use client";

import { Record } from "@/components/Record";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const [beforeStartTime, setBeforeStartTime] = useState(0);
  const [times, setTimes] = useState<any>([]);

  const handlePlay = () => {
    if (!play) {
      setWaiting(true);
      setTimeout(() => {
        setBeforeStartTime(0);
        const date = Date.now();
        setBeforeStartTime(date.valueOf());
        setWaiting(false);
        setPlay(true);
      }, (Math.random() + 1) * 1000);
    }
  };

  const handleStopPlay = () => {
    if (play) {
      const date = Date.now();
      setTime(date.valueOf() - beforeStartTime);
      setBeforeStartTime(0);
      setPlay(false);
      setTimes((value: any) => [date.valueOf() - beforeStartTime, ...value]);
    }
  };
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
          Reaction Time Game
        </h1>
        <p className="leading-7">
          Press Stop button immediately when the box turn green. The faster you
          click, the faster your reaction time.
        </p>
      </div>
      <div className="flex flex-col justify-center ">
        <div
          className={`${
            play ? "bg-green-500" : "bg-red-500"
          } mb-4 rounded-lg w-96 h-72`}
        />
        {!play && (
          <Button
            size={"lg"}
            className="w-full mx-auto"
            disabled={waiting}
            onClick={handlePlay}
          >
            Start
          </Button>
        )}
        {play && (
          <div className="flex flex-col items-center gap-2">
            <Button
              size={"lg"}
              className="w-full mx-auto "
              onClick={handleStopPlay}
            >
              Stop
            </Button>
          </div>
        )}
        <div className="p-2 pb-6 mt-16 text-3xl font-semibold tracking-tight text-center transition-colors border-2 border-black rounded-lg scroll-m-20">
          <span className="text-base font-normal text-neutral-500">
            Your reaction time is
          </span>
          <br /> {time}ms
        </div>
      </div>
      <div className="absolute top-1/3 left-40">
        {times[0] && <Record times={times} />}
      </div>
    </main>
  );
}
