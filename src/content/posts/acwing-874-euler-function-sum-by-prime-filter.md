---
title: "AcWing 874 - 筛法求欧拉函数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "筛法求欧拉函数"
---

## 筛法求欧拉函数之和

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

typedef long long LL;

const int N = 1000010;
int phi[N];
int primes[N];
bool st[N];
int n;

void get_eulers(int n) {
    int cnt = 0;
    phi[1] = 1;
    for (int i = 2; i <= n; i++) {
        if (!st[i]) {
            primes[cnt++] = i;
            phi[i] = i - 1;
        }
        for (int j = 0; primes[j] <= n / i; j++) {
            st[primes[j] * i] = true;
            if (i % primes[j] == 0) {
                phi[i * primes[j]] = phi[i] * primes[j];
                break;
            }
            else phi[i * primes[j]] = phi[i] * (primes[j] - 1);
        }
    }
}

int main() {
    cin >> n;
    get_eulers(n);
    LL res = 0;
    for (int i = 1; i <= n; i++) res += phi[i];
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/876/](https://www.acwing.com/problem/content/876/)
