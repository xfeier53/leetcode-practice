/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  let collection = [];
  for (let i = 0; i < votes[0].length; i++) {
    let map = new Map();
    for (let j = 0; j < votes.length; j++) {
      let vote = votes[j][i];
      if (map.has(vote)) {
        map.set(vote, map.get(vote) + 1);
      } else {
        map.set(vote, 1);
      }
    }
    collection.push(map);
  }
  return votes[0]
    .split("")
    .sort((a, b) => {
      for (let i = 0; i < collection.length; i++) {
        let votesForA = collection[i].get(a) ?? 0;
        let votesForB = collection[i].get(b) ?? 0;
        if (votesForA === votesForB) {
          continue;
        }
        return votesForB - votesForA;
      }
      return a > b ? 1 : -1;
    })
    .join("");
};

console.error(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));
