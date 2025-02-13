const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

function removeKFromList(l, k) {
  const pseudoHead = new ListNode(0);
  pseudoHead.next = l;

  let current = pseudoHead;

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return pseudoHead.next;
}

module.exports = {
  removeKFromList,
};
