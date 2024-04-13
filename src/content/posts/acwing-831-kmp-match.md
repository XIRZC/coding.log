---
title: "AcWing 831 - KMP字符串"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "KMP字符串"
---

## KMP 字符串匹配

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int M = 1000010, N = 100010;
char s[M], p[N];
int ne[N];
int n, m;

int main() {
    cin >> n >> p + 1 >> m >> s + 1;
    for (int i = 2, j = 0; i <= n; i++) {
        while(j && p[i] != p[j + 1]) j = ne[j];
        if (p[i] == p[j + 1]) j++;
        ne[i] = j;
    }
    for (int i = 1, j = 0; i <= m; i++) {
        while (j && s[i] != p[j + 1]) j = ne[j];
        if (s[i] == p[j + 1]) j++;
        if (j == n) {
            cout << i - n << ' ';
            j = ne[j];
        }
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/833/](https://www.acwing.com/problem/content/833/)
