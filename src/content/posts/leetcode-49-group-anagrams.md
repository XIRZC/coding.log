---
title: "LeetCode 49 - 字母异位词分组"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。"
---

## 哈希表第一次提交

时间：`O(N)` 空间： `O(N)`

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        HashMap<String, ArrayList<String>> strsMap = new HashMap<String, ArrayList<String>>();
        int len = strs.length;
        for(int i = 0; i < len; i++) {
            char[] chars = strs[i].toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            if(!strsMap.containsKey(key)) {
                strsMap.put(key, new ArrayList<>());
            }
            ArrayList<String> strList = strsMap.get(key);
            strList.add(strs[i]);
            strsMap.put(key, strList);
        }
        strsMap.forEach((key, value) -> res.add(value));
        return res;
    }
}
```

## 哈希表第二次提交

时间：`O(N)` 空间： `O(N)`

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        Map<String, List<String>> strsMap = new HashMap<String, List<String>>();
        for(String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            List<String> strList = strsMap.getOrDefault(key, new ArrayList<>());
            strList.add(str);
            strsMap.put(key, strList);
        }
        return new ArrayList<List<String>>(strsMap.values());
    }
}
```

> [https://leetcode.cn/problems/group-anagrams/](https://leetcode.cn/problems/group-anagrams/)
