---
title: "LeetCode 21 - 合并两个有序链表"
pubDate: "2024-4-28"
categories: ["LeetCode"]
description: "合并两个有序链表"
---

## 合并两个有序链表

时间：`O(K)` 空间： `O(1)`

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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode();
        ListNode* now = dummy;
        while (list1 != NULL && list2 != NULL) {
            if (list1->val <= list2->val) {
                now->next = list1;
                list1 = list1->next;
            }
            else {
                now->next = list2;
                list2 = list2->next;
            }
            now = now->next;
        }
        now->next = list1 ? list1 : list2;
        return dummy->next;
    }
};
```

> [https://leetcode.cn/problems/merge-two-sorted-lists/](https://leetcode.cn/problems/merge-two-sorted-lists/)
