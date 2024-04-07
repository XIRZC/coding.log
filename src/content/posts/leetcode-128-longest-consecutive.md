---
title: "LeetCode 128 - 最长连续序列"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。"
---

## 排序+滑动窗口

时间：`O(NlogN)` 空间： `O(1)`

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        int l = 0, r = 0, n = nums.length, res = 0, cnt = 0;
        while (l <= r && r < n) {
            while (r < n - 1) {
                if (nums[r] + 1 == nums[r + 1]) r++;
                else if (nums[r] == nums[r + 1]) {
                    cnt++;
                    r++;a
                }
                else break;
            }
            // System.out.printf("%d %d %d\n", l, r, cnt);
            res = Math.max(res, r - l + 1 - cnt);
            l = r + 1;
            r = l;
            cnt = 0;
        }
        return res;
    }
}
```

## 哈希表

时间：`O(N)` 空间： `O(N)`

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        int res = 0;
        for (int num : set) {
            // find the new sequence by smallest element
            if (!set.contains(num - 1)) {
                int tmp = num;
                while (set.contains(tmp)) tmp++;
                res = Math.max(res, tmp - num);
            }
        }
        return res;
    }
}
```

> [https://leetcode.cn/problems/longest-consecutive-sequence/](https://leetcode.cn/problems/longest-consecutive-sequence/)
