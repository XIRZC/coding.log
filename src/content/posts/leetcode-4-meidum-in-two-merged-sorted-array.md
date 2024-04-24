---
title: "LeetCode 4 - 寻找两个正序数组的中位数"
pubDate: "2024-4-21"
categories: ["LeetCode"]
description: "寻找两个正序数组的中位数"
---

## 寻找两个正序数组的中位数 - 朴素做法

时间：`O(N + M)` 空间： `O(N + M)`

```c++
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> merge;
        int n = nums1.size(), m = nums2.size();
        int i = 0, j = 0;
        while (i < n && j < m) {
            if (nums1[i] <= nums2[j]) merge.push_back(nums1[i++]);
            else merge.push_back(nums2[j++]);
        }
        while (i < n) merge.push_back(nums1[i++]);
        while (j < m) merge.push_back(nums2[j++]);
        int k = merge.size();
        if (k % 2) return merge[k / 2];
        else return (double) (merge[k / 2] + merge[k / 2 - 1]) / 2;
    }
};
```

## 寻找两个正序数组的中位数 - 朴素做法 - 空间优化

时间：`O(N + M)` 空间： `O(1)`

```c++
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size();
        int i = 0, j = 0, k = 0, x = 0, y = 0;
        while (i < n || j < m) {
            if (k > (m + n) / 2) break;
            y = x;
            if (i >= n) x = nums2[j++];
            else if (j >= m) x = nums1[i++];
            else if (nums1[i] <= nums2[j]) x = nums1[i++];
            else x = nums2[j++];
            k++;
        }
        if ((m + n) % 2 == 1) return (double) x;
        else return (double) (x + y) / 2;
    }
};
```

## 寻找两个正序数组的中位数 - 朴素做法 - 二分搜索 - 迭代写法

时间：`O(log(N + M))` 空间： `O(1)`

```c++
class Solution {
public:

    int binsearch(vector<int>& nums1, vector<int>& nums2, int k) {
        int i = 0, j = 0, n = nums1.size(), m = nums2.size();
        while (true) {
            if (i == n) return nums2[k + j - 1];
            if (j == m) return nums1[k + i - 1];
            if (k == 1) return min(nums1[i], nums2[j]);
            int t = k / 2 - 1;
            int ni = min(i + t, n - 1), nj = min(j + t, m - 1);
            if (nums1[ni] <= nums2[nj]) {
                k = k - (ni - i + 1);
                i = ni + 1;
            }
            else {
                k = k - (nj - j + 1);
                j = nj + 1;
            }
        }
    }

    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size(), z = m + n;
        if (z % 2) return binsearch(nums1, nums2, z / 2 + 1);
        else return (binsearch(nums1, nums2, z / 2) + binsearch(nums1, nums2, z / 2 + 1)) / 2.0;
    }
};
```

## 寻找两个正序数组的中位数 - 朴素做法 - 二分搜索 - 递归写法

时间：`O(log(N + M))` 空间： `O(N + M)`

```c++
class Solution {
public:

    int n, m;

    int binsearch(vector<int>& nums1, vector<int>& nums2, int l1, int l2, int k) {
        if (l1 == n) return nums2[l2 + k - 1];
        if (l2 == m) return nums1[l1 + k - 1];
        if (k == 1) return min(nums1[l1], nums2[l2]);
        int t = k / 2 - 1;
        int nl1 = min(l1 + t, n - 1), nl2 = min(l2 + t, m - 1);
        if (nums1[nl1] <= nums2[nl2]) return binsearch(nums1, nums2, nl1 + 1, l2, k - (nl1 - l1 + 1));
        else return binsearch(nums1, nums2, l1, nl2 + 1, k - (nl2 - l2 + 1));
    }

    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        n = nums1.size(), m = nums2.size();
        int z = m + n;
        if (z % 2) return binsearch(nums1, nums2, 0, 0, z / 2 + 1);
        else return (binsearch(nums1, nums2, 0, 0, z / 2) + binsearch(nums1, nums2, 0, 0, z / 2 + 1)) / 2.0;
    }
};
```

> [https://leetcode.cn/problems/median-of-two-sorted-arrays](https://leetcode.cn/problems/median-of-two-sorted-arrays)
