---
title: "LeetCode 394 - 字符串解码"
pubDate: "2024-4-22"
categories: ["LeetCode"]
description: "字符串解码"
---

## 字符串解码

时间：`O(N)` 空间： `O(N)`

```c++
class Solution {
public:

    vector<int> nums;
    vector<string> ops;

    void eval(int type) {
        vector<string> tmp;
        if (type) {
            while (ops.size() && ops.back() != "[") {
                tmp.push_back(ops.back());
                ops.pop_back();
            }
            ops.pop_back();
        }
        else {
            while (ops.size()) {
                tmp.push_back(ops.back());
                ops.pop_back();
            }
        }
        string sum = "";
        for (int i = tmp.size() - 1; i >= 0; i--) sum += tmp[i];
        int k = 1;
        if (nums.size()) {
            k = nums.back();
            nums.pop_back();
        }
        string nsum = "";
        while (k--) nsum += sum;
        ops.push_back(nsum);
    }

    string decodeString(string s) {
        int n = s.length();
        for (int i = 0; i < n; i++) {
            if (isdigit(s[i])) {
                int t = 0, j = i;
                while (isdigit(s[j])) {
                    t = t * 10 + (s[j] - '0');
                    j++;
                }
                nums.push_back(t);
                i = j - 1;
            }
            else if (s[i] == '[') ops.push_back(string(1, s[i]));
            else if (s[i] == ']') eval(1);
            else {
                string sum = "";
                int j = i;
                while (s[j] >= 'a' && s[j] <= 'z') {
                    sum += s[j];
                    j++;
                }
                cout << sum << endl;
                ops.push_back(sum);
                i = j - 1;
            }
        }
        eval(0);
        return ops.back();
    }
};
```

> [https://leetcode.cn/problems/decode-string](https://leetcode.cn/problems/decode-string)
