---
title: "LeetCode 第395场周赛"
pubDate: "2024-4-28"
categories: ["LeetCode"]
description: "LeetCode 第395场周赛"
---

## 100285 - 数组最后一个元素的最小值

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    int addedInteger(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size(), min1 = INT_MAX, min2 = INT_MAX;
        for (int i = 0; i < n; i++) min1 = min(min1, nums1[i]);
        for (int j = 0; j < m; j++) min2 = min(min2, nums2[j]);
        return min2 - min1;
    }
};
```

## 100287 - 找出与数组相加的整数II

时间：`O(N^2)` 空间：`O(N)`

```c++
const int N = 210;

class Solution {
public:
    int minimumAddedInteger(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size();
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        int diff2[N];
        if (m == 1) return nums2[m - 1] - nums1[n - 1];
        for (int i = 0; i < m - 1; i++) diff2[i + 1] = nums2[i + 1] - nums2[i];
        for (int i = n - 1; i >= 0; i--) {
            int idx = m - 1;
            vector<int> store1;
            store1.push_back(nums1[i]);
            for (int j = i - 1; j >= 0; j--) {
                if (store1.back() - nums1[j] == diff2[idx]) {
                    store1.push_back(nums1[j]);
                    idx--;
                    if (idx < 1) break;
                }
            }
            if (store1.size() == m) return nums2[m - 1] - store1[0];
        }
        return 0;
    }
};
```

## 100282 - 数组最后一个元素的最小值

时间：`O(LogN)` 空间：`O(1)`

```c++
class Solution {
public:
    long long minEnd(int n, int x) {
        int t = n - 1; 
        int sa[64], idx = 0;
        while (x || t) {
            int s = x % 2;
            if (s == 0) {
                s = t % 2;
                t /= 2;
            }
            x /= 2;
            sa[idx++] = s;
        }
        long long res = 0;
        for (int i = idx - 1; i >= 0; i--) res = res * 2 + sa[i];
        return res;
    }
};
```




> [https://leetcode.cn/contest/weekly-contest-395](https://leetcode.cn/contest/weekly-contest-395)
