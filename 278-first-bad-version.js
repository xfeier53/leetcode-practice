/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let found = -1;
    let lower = 0;
    let upper = n;
    while (found === -1) {
      let mid = Math.floor((upper + lower) / 2);
      if (isBadVersion(mid)) {
        upper = mid;
      } else {
        lower = mid;
      }
      if (lower + 1 === upper) {
        found = upper;
      }
    }
    return found;
  };
};
