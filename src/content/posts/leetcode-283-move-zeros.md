---
title: "LeetCode 283 - 移动零"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。"
---

## 暴力枚举

快慢指针，慢指针找遍历过的从左往右数第一个非 0，快指针找遍历过的从左往右数第一个 0，找到之后进行元素移动

时间：`O(N^2)` 空间： `O(1)`

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int numsLen = nums.length;
        // backward find nonzero location
        for(int i = numsLen - 1; i >= 1; i--) {
            if(nums[i] == 0) continue;
            // backward find zero location
            int j;
            for( j= i - 1; j >= 0; j--) {
                if(nums[j] != 0) continue;
                for(int k = j; k <= i-1; k++) {
                    nums[k] = nums[k+1];
                }
                nums[i] = 0;
            }
            i = j;
        }
    }
}
```

## 优化后

时间：`O(N)` 空间： `O(N)`

```java
class Solution {
    public void moveZeroes(int[] nums) {
        // real zero swap timing
        // left -> processed zero tail
        // right -> to be processed nonzero head
        int n = nums.length, left = 0, right = 0;
        while(right < n) {
            if(nums[right] != 0) {
                swap(nums, left, right);
                left++;
            }
            right++;
        }

    }

    public void swap(int nums[], int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
```

> [https://leetcode.cn/problems/move-zeroes/](https://leetcode.cn/problems/move-zeroes/)
