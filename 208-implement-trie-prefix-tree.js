var Trie = function () {
  this.children = new Array(26).fill(null);
  this.end = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let trie = this;
  for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i) - 97;
    if (!trie.children[index]) {
      trie.children[index] = new Trie();
    }
    trie = trie.children[index];
  }
  trie.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let trie = this;
  for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i) - 97;
    if (!trie.children[index]) {
      return false;
    }
    trie = trie.children[index];
  }
  return trie.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let trie = this;
  for (let i = 0; i < prefix.length; i++) {
    let index = prefix.charCodeAt(i) - 97;
    if (!trie.children[index]) {
      return false;
    }
    trie = trie.children[index];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert("apple");
var param_2 = obj.search("apple");
var param_3 = obj.search("app");
var param_4 = obj.startsWith("app");
obj.insert("app");
var param_5 = obj.search("app");
