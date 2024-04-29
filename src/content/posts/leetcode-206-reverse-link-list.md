---
title: "LeetCode 206 - 反转链表"
pubDate: "2024-4-29"
categories: ["LeetCode"]
description: "反转链表"
---

## 反转链表

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
    ListNode* reverseList(ListNode* head) {
        ListNode *now = head, *prev = NULL, *tmp;
        while (now != NULL) {
            tmp = now->next;
            now->next = prev;
            prev = now;
            now = tmp;
        }
        return prev;
    }
};
```

> [https://leetcode.cn/problems/reverse-linked-list/](https://leetcode.cn/problems/reverse-linked-list/)
