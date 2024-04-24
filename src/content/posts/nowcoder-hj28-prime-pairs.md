---
title: "NowCoder HJ28 - 素数伴侣"
pubDate: "2024-4-23"
categories: ["NowCoder"]
description: "素数伴侣"
---

## 素数伴侣 - 回溯暴力

时间：`O()` 空间： `O()`

```c++
#include <iostream>

using namespace std;

const int N = 60010;
int primes[N], idx = 0;
bool st[N], stnums[N];
int n, res = 0, cnt = 0, used = 0, a[N];

void get_primes() {
    st[1] = true;
    for (int i = 2; i <= N; i++) {
        if (!st[i]) primes[idx++] = i;
        for (int j = 0; primes[j] <= N / i; j++) {
            st[primes[j] * i] = true;
            if (i % primes[j] == 0) break;
        }
    }
}

void backtrack() {
    if (used == n) {
        res = max(res, cnt);
        return;
    }
    int s1, s2;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int num1 = a[i], num2 = a[j];
            if (i != j && !stnums[num1] && !stnums[num2]) {
                stnums[num1] = stnums[num2] = true;
                used += 2;
                if (!st[num1 + num2]) cnt++;
                backtrack();
                if (!st[num1 + num2]) cnt--;
                used -= 2;
                stnums[num1] = stnums[num2] = false;
            }
        }
    }
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    get_primes();
    backtrack();
    cout << res;
    return 0;
}
// 64 位输出请用 printf("%lld")
```

## 素数伴侣 - 匈牙利算法

时间：`O(NM)` 空间：O(N)

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 60010, M = 110;
int primes[N], idx = 0;
bool st[N], stnums[M];
int n, res = 0, a[M], b[M], idxa = 0, idxb = 0, match[M];

void get_primes() {
    st[1] = true;
    for (int i = 2; i <= N; i++) {
        if (!st[i]) primes[idx++] = i;
        for (int j = 0; primes[j] <= N / i; j++) {
            st[primes[j] * i] = true;
            if (i % primes[j] == 0) break;
        }
    }
}

bool find(int x) {
    for (int i = 1; i <= idxb; i++) {
        if (!st[x + b[i]]) {
            if (!stnums[i]) {
                stnums[i] = true;
                if (match[i] == 0 || find(match[i])) {
                    match[i] = x;
                    return true;
                }
            }
        }
    }
    return false;
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x % 2) a[++idxa] = x;
        else b[++idxb] = x;
    }
    get_primes();
    for (int i = 1; i <= idxa; i++) {
        memset(stnums, false, sizeof stnums);
        if (find(a[i])) res++;
    }
    cout << res;
    return 0;
}
```

> [https://www.nowcoder.com/practice/b9eae162e02f4f928eac37d7699b352e](https://www.nowcoder.com/practice/b9eae162e02f4f928eac37d7699b352e)