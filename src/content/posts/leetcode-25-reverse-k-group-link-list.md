---
title: "LeetCode 25 - K个一组翻转链表"
pubDate: "2024-4-29"
categories: ["LeetCode"]
description: "K个一组翻转链表"
---

## K个一组翻转链表

时间：`O(N)` 空间： `O(1)`

```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:

    ListNode* reverse(ListNode* head) {
        ListNode* pre = NULL, *now = head, *tmp;
        while (now != NULL) {
            tmp = now->next;
            now->next = pre;
            pre = now;
            now = tmp;
        }
        return pre;
    }

    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* dummy = new ListNode();
        dummy->next = head;
        ListNode* pre = dummy, *end = dummy, *start, *next;
        while (end != NULL) {
            for (int i = 0; i < k && end != NULL; i++) end = end->next;
            if (end == NULL) break;
            start = pre->next;
            next = end->next;
            end->next = NULL;
            reverse(start);
            pre->next = end;
            start->next = next;
            pre = start;
            end = start;
        }
        return dummy->next;
    }
};
```

> [https://leetcode.cn/problems/reverse-nodes-in-k-group](https://leetcode.cn/problems/reverse-nodes-in-k-group)
