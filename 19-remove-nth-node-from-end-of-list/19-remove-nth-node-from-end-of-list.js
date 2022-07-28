/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointer = head,cur = head;
    let length = 0;
    let removedNode;
    while(pointer)
        {
            length++;
            pointer = pointer.next;
        }
    if(length === 1)
        {
            return null;
        }
    if (length === n)
        {
            cur = cur.next;
            return cur;
        }
    removedNode = length - n;
    while(removedNode-1)
        {
            cur = cur.next;
            removedNode --;
        }
    cur.next = cur.next.next;
    return head;
};