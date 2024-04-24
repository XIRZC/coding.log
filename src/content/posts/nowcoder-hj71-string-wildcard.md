---
title: "NowCoder HJ71 - 字符串通配符"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "字符串通配符"
---

## 字符串通配符 - 模拟迭代 - 30/34 - 未过

时间：`O(N + M)` 空间： `O(1)`

```c++
#include <iostream>
using namespace std;

bool match(string p, string s) {
    int i = 0, j = 0;
    while (i < p.size() && j < s.size()) {
        if (p[i] == s[j] || p[i] == '?') {
            i++;
            j++;
        }
        else if (p[i] == '*') {
            int cnt = 0;
            while (i < p.size() && p[i] == '*') {
                cnt++;
                i++;
            }
            j += cnt;
            while (j < s.size() && p[i] != s[j]) j++;
        }
        else return false;
    }
    if (i < p.size() || j < s.size()) return false;
    return true;
}

int main() {
    string p, s;
    cin >> p >> s;
    if (match(p, s)) cout << "true";
    else cout << "false";
    return 0;
}
```

可能可以通过递归解决

## 动态规划

时间：`O(NM)` 空间： `O(NM)`

```
状态转移：dp[i][j] = dp[i - 1][j - 1] if lower(s[i]) == lower(p[j])
                 = dp[i - 1][j - 1] && isalnum(p[j]) if p[j] == '?'
                 = (dp[i - 1][j] && isalnum(p[j])) || dp[i][j - 1] if p[j] == '*'
                 = false
```

```c++
#include <iostream>
using namespace std;

const int N = 110;
bool dp[N][N];

bool match(string s, string p) {
    int n = s.size(), m = p.size();
    dp[0][0] = true;
    for (int i = 1; i <= m; i++) {
        if (p[i - 1] != '*') break;
        dp[0][i] = true;
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (tolower(s[i - 1]) == tolower(p[j - 1])) dp[i][j] = dp[i - 1][j - 1];
            else if (p[j - 1] == '?') dp[i][j] = dp[i - 1][j - 1] && isalnum(s[i - 1]);
            else if (p[j - 1] == '*') dp[i][j] = (dp[i - 1][j] && isalnum(s[i - 1])) || dp[i][j - 1];
            else dp[i][j] = false;
        }
    }
    return dp[n][m];
}

int main() {
    string p, s;
    cin >> p >> s;
    if (match(s, p)) cout << "true";
    else cout << "false";
    return 0;
}
```

> [https://www.nowcoder.com/practice/43072d50a6eb44d2a6c816a283b02036](https://www.nowcoder.com/practice/43072d50a6eb44d2a6c816a283b02036)