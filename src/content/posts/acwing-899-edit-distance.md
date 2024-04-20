---
title: "AcWing 899 - 编辑距离"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "编辑距离"
---

## 编辑距离

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 if a[i] != b[j]
                 = dp[i - 1][j - 1] if a[i] == b[j]

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 1010, M = 15;
int dp[N][N];
int n, m;
char strs[N][M];

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) cin >> strs[i] + 1;
    while (m--) {
        int limit;
        char tgt[M];
        cin >> tgt + 1 >> limit;
        int tgt_len = strlen(tgt + 1);
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            int src_len = strlen(strs[i] + 1);
            for (int j = 0; j <= src_len; j++) dp[j][0] = j;
            for (int j = 0; j <= tgt_len; j++) dp[0][j] = j;
            for (int j = 1; j <= src_len; j++) {
                for (int k = 1; k <= tgt_len; k++) {
                    if (strs[i][j] != tgt[k]) dp[j][k] = min(dp[j - 1][k - 1], min(dp[j - 1][k], dp[j][k - 1])) + 1;
                    else dp[j][k] = dp[j - 1][k - 1];
                }
            }
            if (dp[src_len][tgt_len] <= limit) cnt++;
        }
        cout << cnt << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/899/](https://www.acwing.com/problem/content/899/)
