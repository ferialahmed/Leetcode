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
    let cur = head;
    let length = 0;
    let pointer = 1;
    let middle;
    while(cur != null)
        {
            cur = cur.next;
            length ++;
        }
    if (length%2 === 0)
        {
            middle = (length/2) +1
        }
    else (middle = Math.floor(length / 2) + 1)
    
    while (pointer < middle)
        {
            head = head.next;
            pointer ++;
        }
    return head;
};