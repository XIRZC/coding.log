---
title: "AcWing 868 - 筛质数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "筛质数"
---

## 筛质数 - 朴素筛法

时间：`O(NlogN)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1000010;
int primes[N];
bool st[N];

int get_primes(int n) {
    int cnt = 0;
    for (int i = 2; i <= n; i++) {
        if (!st[i]) primes[cnt++] = i;
        // 无论当前这个数是质数还是合数，都用来筛他们的倍数来筛掉合数，存在大量重复筛的情况
        for (int j = 2 * i; j <= n; j += i) st[j] = true;
    }
    return cnt;
}

int main() {
    int n;
    cin >> n;
    cout << get_primes(n);
    return 0;
}
```

## 筛质数-埃式筛法

时间：`O(NloglogN)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1000010;
int primes[N];
bool st[N];

int get_primes(int n) {
    int cnt = 0;
    for (int i = 2; i <= n; i++) {
        if (!st[i]) {
            primes[cnt++] = i;
            // 只用质数来筛他们的倍数来筛掉合数，存在少量重复筛的情况
            for (int j = 2 * i; j <= n; j += i) st[j] = true;
        }
    }
    return cnt;
}

int main() {
    int n;
    cin >> n;
    cout << get_primes(n);
    return 0;
}
```

## 筛质数-线性筛法

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1000010;
int primes[N];
bool st[N];

int get_primes(int n) {
    int cnt = 0;
    for (int i = 2; i <= n; i++) {
        if (!st[i]) primes[cnt++] = i;
        for (int j = 0; primes[j] <= n / i; j++) {
            st[primes[j] * i]  = true;
            // 如果已经确定primes[j]为i的最小质因子，则不需要使用后续其他质因数来筛，
            // 因为其他质因数倍数所组成的合数都可以被当前这个最小质因子和后续遍历到的一个数来筛掉，
            // 比如遍历4的时候可以筛掉8和12，但是后续当i遍历到6的时候，又使用2筛掉了12
            if (i % primes[j] == 0) break;
        }
    }
    return cnt;
}

int main() {
    int n;
    cin >> n;
    cout << get_primes(n);
    return 0;
}
```

> [https://www.acwing.com/problem/content/870/](https://www.acwing.com/problem/content/870/)
