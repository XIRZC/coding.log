---
title: "NowCoder HJ33 - 整数与IP地址之间的转化"
pubDate: "2024-4-23"
categories: ["NowCoder"]
description: "整数与IP地址之间的转化"
---

## 整数与IP地址之间的转化 - 模拟

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
using namespace std;

bool judge(string s) {
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == '.') return true;
    }
    return false;
}

int main() {
    string s;
    while (cin >> s) {
        int n = s.size();
        if (judge(s)) {
            unsigned int sum = 0;
            for (int i = 0; i < n; i++) {
                int t = 0;
                while (i < n && s[i] != '.') t = t * 10 + (s[i++] - '0');
                sum = (sum << 8) + t;
            }
            cout << sum << endl;
        }
        else {
            string sum = "";
            unsigned int k = 0;
            for (int i = 0; i < n; i++) k = k * 10 + (s[i] - '0');
            for (int i = 3; i >= 0; i--) {
                sum += (to_string((k >> (8 * i)) & 255));
                sum += '.';
            }
            cout << sum.substr(0, sum.size() - 1) << endl;
        }
    }
    return 0;
}
```

> [https://www.nowcoder.com/practice/66ca0e28f90c42a196afd78cc9c496ea](https://www.nowcoder.com/practice/66ca0e28f90c42a196afd78cc9c496ea)