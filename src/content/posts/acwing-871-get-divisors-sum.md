---
title: "AcWing 871 - 约数之和"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "约数之和"
---

## 约数之和

如果 N=p1^c1∗p2^c2∗…∗pk^ck，约数个数：(c1+1)∗(c2+1)∗…∗(ck+1)，约数之和： (p1^0+p1^1+…+p1^c1)∗…∗(pk^0+pk^1+…+pk^ck)

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
        LL accu = 1, sum = 1;
        auto [x, c] = item;
        for (int i = 1; i <= c; i++) {
            accu = (accu * x) % MOD;
            sum = (sum + accu) % MOD;
        }
        res = (res * sum) % MOD;
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/873/](https://www.acwing.com/problem/content/873/)
