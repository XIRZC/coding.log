---
title: "LeetCode 138 - 随机链表复制"
pubDate: "2024-4-25"
categories: ["LeetCode"]
description: "随机链表复制"
---

## 随机链表复制 - 朴素

时间：`O(N^2)` 空间： `O(N)`

```c++
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

const int N = 1010;

class Solution {
public:

    int idx = 1;
    int random[N];

    Node* copyRandomList(Node* head) {
        Node* copyhead = new Node(0);
        Node* now = head;
        Node* copynow = copyhead;
        while (now != NULL) {
            copynow->next = new Node(now->val);
            copynow = copynow->next;

            Node* tmpnow = head;
            int randomidx = 1;
            while (tmpnow != NULL) {
                if (tmpnow == now->random) random[idx] = randomidx;
                randomidx++;
                tmpnow = tmpnow->next;
            }
            idx++;
            now = now->next;
        }
        copynow = copyhead->next;
        int oidx = 1;
        while (copynow != NULL) {
            Node * tmpcopynow = copyhead->next;
            int iidx = 1;
            while (tmpcopynow != NULL) {
                if (iidx == random[oidx]) copynow->random = tmpcopynow;
                iidx++;
                tmpcopynow = tmpcopynow->next;
            }
            oidx++;
            copynow = copynow->next;
        }
        return copyhead->next;
    }
};
```

## 哈希表 + 回溯

时间：`O(N)` 空间：`O(N)`

```c++
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:

    unordered_map<Node*, Node*> cache;

    Node* copyRandomList(Node* head) {
        if (head == NULL) return NULL;
        if (!cache.count(head)) {
            Node* copynode = new Node(head->val);
            cache[head] = copynode;
            copynode->next = copyRandomList(head->next);
            copynode->random = copyRandomList(head->random);
        }
        return cache[head];
    }
};
```

> [https://leetcode.cn/problems/copy-list-with-random-pointer](https://leetcode.cn/problems/copy-list-with-random-pointer)