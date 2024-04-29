---
title: "LeetCode 23 - 合并K个升序链表"
pubDate: "2024-4-28"
categories: ["LeetCode"]
description: "合并K个升序链表"
---

## 合并K个升序链表

时间：`O(NK^2)` 空间： `O(NK)`

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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        int n = lists.size();
        ListNode* dummy = new ListNode();
        for (int i = 0; i < n; i++) {
            ListNode* prev = dummy;
            ListNode* now = dummy->next;
            ListNode* mergehead = lists[i];
            while (mergehead != NULL) {
                if (dummy->next == NULL || mergehead->val < dummy->next->val) {
                    ListNode* tmp = dummy->next;
                    dummy->next = new ListNode(mergehead->val);
                    dummy->next->next = tmp;
                    prev = dummy;
                    now = dummy->next;
                }
                else {
                    while (now != NULL && mergehead->val >= now->val) {
                        prev = now;
                        now = now->next;
                    }
                    prev->next = new ListNode(mergehead->val);
                    prev->next->next = now;
                    now = prev->next;
                }
                ListNode* tmp = dummy->next;
                // while (tmp != NULL) {
                //     cout << tmp->val << ' ';
                //     tmp = tmp->next;
                // }
                // cout << endl;
                mergehead = mergehead->next;
            }
        }
        return dummy->next;
    }
};
```

精简版，使用合并两个有序链表组合

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

    ListNode* merge2Lists(ListNode* a, ListNode* b) {
        ListNode* dummy = new ListNode();
        ListNode* now = dummy;
        while (a != NULL && b != NULL) {
            if (a->val <= b->val) {
                now->next = a;
                a = a->next;
            }
            else {
                now->next = b;
                b = b->next;
            }
            now = now->next;
        }
        now->next = a ? a : b;
        return dummy->next;
    }

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* mergedList = NULL;
        for (int i = 0; i < lists.size(); i++) mergedList = merge2Lists(mergedList, lists[i]);
        return mergedList;
    }
};
```

## 小顶堆

时间：`O(NKLogK)` 空间：`O(K)`

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

    struct ComparePair {
        bool operator()(const pair<int, ListNode*>& a, const pair<int, ListNode*>& b) const {
            return a.first > b.first;
        }
    };

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* dummy = new ListNode(), *mergedList = dummy;
        priority_queue<pair<int, ListNode*>, vector<pair<int, ListNode*>>, ComparePair> heap;
        for (auto item : lists) {
            if (item != NULL) heap.push({item->val, item});
        }
        while (heap.size()) {
            auto top = heap.top();
            heap.pop();
            mergedList->next = top.second;
            mergedList = mergedList->next;
            if (top.second->next != NULL) heap.push({top.second->next->val, top.second->next});
        }
        return dummy->next;
    }
};
```

## 分治

时间：`O(NKLogK)` 空间：`O(LogK)`

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

    ListNode* merge2Lists(ListNode* a, ListNode* b) {
        ListNode* dummy = new ListNode(), *now = dummy;
        while(a != NULL && b != NULL) {
            if (a->val <= b->val) {
                now->next = a;
                a = a->next;
            }
            else {
                now->next = b;
                b = b->next;
            }
            now = now->next;
        }
        now->next = a ? a : b;
        return dummy->next;
    }

    ListNode* mergeKListsImpl(vector<ListNode*>& lists, int l, int r) {
        int k = r - l + 1;
        if (k == 0) return NULL;
        if (k == 1) return lists[l];
        int m = l + r >> 1;
        ListNode* left = mergeKListsImpl(lists, l, m);
        ListNode* right = mergeKListsImpl(lists, m + 1, r);
        return merge2Lists(left, right);
    }

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        return mergeKListsImpl(lists, 0, lists.size() - 1);
    }
};
```

> [https://leetcode.cn/problems/merge-k-sorted-lists](https://leetcode.cn/problems/merge-k-sorted-lists)
