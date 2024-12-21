/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  if (intervals.length === 0) {
    return [newInterval];
  }
  if (newInterval[1] < intervals[0][0]) {
    return [newInterval, ...intervals];
  }
  if (intervals[intervals.length - 1][1] < newInterval[0]) {
    intervals.push(newInterval);
    return intervals;
  }
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] >= newInterval[0]) {
      result.push(...intervals.slice(0, i));
      let start = Math.min(intervals[i][0], newInterval[0]);
      if (newInterval[1] < intervals[i][0]) {
        result.push([start, newInterval[1]], ...intervals.slice(i));
        return result;
      } else {
        while (i + 1 < intervals.length && intervals[i + 1][0] <= newInterval[1]) {
          i++;
        }
      }
      let end = Math.max(intervals[i][1], newInterval[1]);
      result.push([start, end], ...intervals.slice(i + 1));
      return result;
    }
  }
};

console.error(
  insert(
    [
      [3, 5],
      [12, 15],
    ],
    [6, 6]
  )
);
