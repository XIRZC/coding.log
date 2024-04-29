---
title: "LeetCode 295 - 数据流的中位数"
pubDate: "2024-4-23"
categories: ["LeetCode"]
description: "数据流的中位数"
---

## 数据流的中位数 - 朴素堆做法

每次查中位数就一直弹出堆顶，直到中位数，然后再复原堆

时间：`O(KN)` 空间： `O(K)`

```c++
class MedianFinder {
public:

    priority_queue<int> heap;

    MedianFinder() {

    }
    
    void addNum(int num) {
        heap.push(num);
    }
    
    double findMedian() {
        int n = heap.size();
        vector<int> tmp;
        int k = (n - 1) / 2;
        double res = 0.0;
        while (k--) {
            tmp.push_back(heap.top());
            heap.pop();
        }
        if (n % 2) res = (double) heap.top();
        else {
            double tmpd = heap.top();
            tmp.push_back(heap.top());
            heap.pop();
            res = (double) (heap.top() + tmpd) / 2.0;
        }
        for (int i = 0; i < tmp.size(); i++) heap.push(tmp[i]);
        return res;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
```

## 两个堆维护 - 一个小顶堆，一个大顶堆

```c++
class MedianFinder {
public:

    priority_queue<int> maxheap;
    priority_queue<int, vector<int>, greater<int>> minheap;

    MedianFinder() {}

    void addNum(int num) {
        if (maxheap.size() == minheap.size()) {
            maxheap.push(num);
            minheap.push(maxheap.top());
            maxheap.pop();
        }
        else {
            minheap.push(num);
            maxheap.push(minheap.top());
            minheap.pop();
        }
    }

    double findMedian() {
        if (maxheap.size() == minheap.size()) return (double) (maxheap.top() + minheap.top()) / 2;
        else return (double) minheap.top();
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
```

> [https://leetcode.cn/problems/find-median-from-data-stream](https://leetcode.cn/problems/find-median-from-data-stream)