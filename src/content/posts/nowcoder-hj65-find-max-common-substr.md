---
title: "NowCoder HJ65 - 查找两个字符串a,b中的最长公共子串"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "查找两个字符串a,b中的最长公共子串"
---

## 查找两个字符串a,b中的最长公共子串

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>
using namespace std;

const int N = 310;
int dp[N][N];

int main() {
    string a, b, tmp;
    cin >> a >> b;
    if (a.size() > b.size()) {
        tmp = a;
        a = b;
        b = tmp;
    }
    int n = a.size(), m = b.size(), res = 0, idx = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            if (res < dp[i][j]) {
                res = dp[i][j];
                idx = i - 1;
            }
        }
    }
    cout << a.substr(idx - res + 1, res);
    return 0;
}
```

> [https://www.nowcoder.com/practice/181a1a71c7574266ad07f9739f791506](https://www.nowcoder.com/practice/181a1a71c7574266ad07f9739f791506)