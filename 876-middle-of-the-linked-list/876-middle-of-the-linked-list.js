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
    let Mid;
    while(cur != null)
        {
            cur = cur.next;
            length ++;
        }
    Mid = Math.floor(length / 2) + 1
    
    while (pointer < Mid)
        {
            head = head.next;
            pointer ++;
        }
    return head;
};