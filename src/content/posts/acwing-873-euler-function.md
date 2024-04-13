---
title: "AcWing 873 - 欧拉函数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "欧拉函数"
---

## 欧拉函数

由容斥原理可证明 1~N 当中与 N 互质的个数为：ϕ(N) = N×((p1−1)/p1)×((p2-1)/p2)×…×((pm-1)/pm)，称该函数为欧拉函数，其中 p1,p2,...,pm 为 N 的所有质因数

时间：`O(N. sqrt(A))` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        int res = x;
        for (int i = 2; i <= x / i; i++) {
            if (x % i == 0) {
                res = res / i * (i - 1);
                while (x % i == 0) x /= i;
            }
        }
        if (x > 1) res = res / x * (x - 1);
        cout << res << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/875/](https://www.acwing.com/problem/content/875/)
