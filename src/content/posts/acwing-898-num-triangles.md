---
title: "AcWing 898 - 数字三角形"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "数字三角形"
---

## 数字三角形

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = max(dp[i + 1][j], dp[i + 1][j + 1]) + a[i][j]

```c++
#include <iostream>

using namespace std;

const int N = 510;
int n;
int dp[N][N], a[N][N];

int main() {
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cin >> a[i][j];
    }
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) dp[i][j] = max(a[i][j] + dp[i + 1][j], a[i][j] + dp[i + 1][j + 1]);
    }
    cout << dp[1][1];
    return 0;
}
```

## 空间压缩

时间：`O(N^2)` 空间：`O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 510;
int n;
int dp[N], a[N][N];

int main() {
    cin >> n;
    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= i; j++) cin >> a[i][j];
    }
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            dp[j] = max(dp[j], dp[j + 1]) + a[i][j];
        }
    }
    cout << dp[1];
    return 0;
}
```

> [https://www.acwing.com/problem/content/900/](https://www.acwing.com/problem/content/900/)
