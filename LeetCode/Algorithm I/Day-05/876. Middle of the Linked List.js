/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0;
    let pointer = head;
    let mid = 0;
    while(head)
        {
            length++;
            head = head.next
        }
    mid = Math.floor(length/2);
    while(mid)
        {
            pointer = pointer.next;
            mid--;
        }
    return pointer;
};
