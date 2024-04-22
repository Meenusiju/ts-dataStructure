class ListNode {
  value: number;
  next: ListNode | null;
  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

let nodeOne = new ListNode(10);
let nodeTwo = new ListNode(20);
let NodeThree = new ListNode(30);

class LinkedList {
  head: ListNode | null;
  constructor(head: ListNode | null) {
    this.head = head;
  }
}
nodeOne.next = nodeTwo;
nodeTwo.next = NodeThree;
let linkedList = new LinkedList(nodeOne);
console.log(linkedList);
