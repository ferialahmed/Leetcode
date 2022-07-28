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
    let i = 0;
   
    while(i < n)
        {
            pointer = pointer.next;
            i++;
        }
    if(pointer == null)
        {
            head = head.next
            return head;
        }
    while(pointer.next)
        {
            pointer = pointer.next;
            cur = cur.next;
        }
    cur.next = cur.next.next;
    return head;
};