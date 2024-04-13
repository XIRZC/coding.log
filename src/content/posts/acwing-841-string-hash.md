---
title: "AcWing 841 - 字符串哈希"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "字符串哈希"
---

## 字符串哈希

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

typedef unsigned long long ULL;

const int N = 100010, P = 131;
int n, m;
char str[N];
ULL h[N], p[N];

ULL get(int l, int r) {
    return h[r] - h[l - 1] * p[r - l + 1];
}

int main() {
    cin >> n >> m;
    cin >> str + 1;
    p[0] = 1;
    h[0] = 0;
    for (int i = 1; i <= n; i++) {
        p[i] = p[i - 1] * P;
        h[i] = h[i - 1] * P + str[i];
    }
    while (m--) {
        int l1, r1, l2, r2;
        cin >> l1 >> r1 >> l2 >> r2;
        if (get(l1, r1) == get(l2, r2)) puts("Yes");
        else puts("No");
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/843/](https://www.acwing.com/problem/content/843/)
