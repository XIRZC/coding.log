---
title: "AcWing 870 - 约数个数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "约数个数"
---

## 约数个数

N = (p1^x1)(p^x2)(p3^x3)…(pk^xk)，其中 pi 为质数。则 N 的约数个数为：(x1+1)(x2+1)(x3+1)…(xk+1)

时间：`O(N . sqrt(A))` 空间： `O(1)`

```c++
#include <iostream>
#include <unordered_map>

using namespace std;

typedef long long LL;
const int MOD = 1e9 + 7;

int main() {
    int n;
    cin >> n;
    unordered_map<int, int> map;
    while (n--) {
        int x;
        cin >> x;
        for (int i = 2; i <= x / i; i++) {
            while (x % i == 0) {
                x /= i;
                map[i]++;
            }
        }
        if (x > 1) map[x]++;
    }
    LL res = 1;
    for (auto item : map) {
        res = (res * (item.second + 1)) % MOD;
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/872/](https://www.acwing.com/problem/content/872/)
