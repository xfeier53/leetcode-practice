import { useEffect, useState } from "react";

const map = {
  0: { topClasses: [0, 1, 3], bottomClasses: [1, 2, 3] },
  1: { topClasses: [1], bottomClasses: [1] },
  2: { topClasses: [0, 1, 2], bottomClasses: [2, 3] },
  3: { topClasses: [0, 1, 2], bottomClasses: [1, 2] },
  4: { topClasses: [1, 2, 3], bottomClasses: [1] },
  5: { topClasses: [0, 2, 3], bottomClasses: [1, 2] },
  6: { topClasses: [0, 2, 3], bottomClasses: [1, 2, 3] },
  7: { topClasses: [0, 1], bottomClasses: [1] },
  8: { topClasses: [0, 1, 2, 3], bottomClasses: [1, 2, 3] },
  9: { topClasses: [0, 1, 2, 3], bottomClasses: [1, 2] },
};

const getClassStrings = (classes) => classes.map((item) => `border${item}`).join(" ");

const SevenSegmentNumber = ({ number }) => {
  const { topClasses, bottomClasses } = map[number];
  const topClassesInString = getClassStrings(topClasses);
  const bottomClassesInString = getClassStrings(bottomClasses);

  return (
    <div className="segmentNumberContainer">
      <div className={`segment topSegment ${topClassesInString}`}></div>
      <div className={`segment bottomSegment ${bottomClassesInString}`}></div>
    </div>
  );
};

const Colon = () => {
  return <div className="colon">:</div>;
};

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date().toTimeString());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date().toTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <SevenSegmentNumber number={currentTime[0]} />
      <SevenSegmentNumber number={currentTime[1]} />
      <Colon />
      <SevenSegmentNumber number={currentTime[3]} />
      <SevenSegmentNumber number={currentTime[4]} />
      <Colon />
      <SevenSegmentNumber number={currentTime[6]} />
      <SevenSegmentNumber number={currentTime[7]} />
    </div>
  );
}
