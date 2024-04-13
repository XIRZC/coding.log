---
title: "AcWing 840 - 模拟散列表"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "模拟散列表"
---

## 模拟哈希表-拉链法解决冲突

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 100010, K = 100003;
int h[N], e[N], ne[N], idx = 0, n;

void insert(int x) {
    int k = (x % K + K) % K;
    e[idx] = x;
    ne[idx] = h[k];
    h[k] = idx++;
}

bool find(int x) {
    int k = (x % K + K) % K;
    for (int i = h[k]; i != -1; i = ne[i]) {
        if (e[i] == x) return true;
    }
    return false;
}

int main() {
    cin >> n;
    memset(h, -1, sizeof h);
    while (n--) {
        string op;
        int x;
        cin >> op >> x;
        if (op== "I") insert(x);
        else puts(find(x) ? "Yes" : "No");
    }
    return 0;
}
```

## 模拟哈希表-开放寻址法

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 200010, K = 200003, null = 0x3f3f3f3f;
int h[N], n;

int find(int x) {
    int k = (x % K + K) % K;
    while (h[k] != x) {
        if (h[k] == null) break;
        k++;
        if (k == N) k = 0;
    }
    return k;
}

int main() {
    cin >> n;
    memset(h, null, sizeof h);
    while (n--) {
        string op;
        int x;
        cin >> op >> x;
        if (op == "I") h[find(x)] = x;
        else puts(h[find(x)] != null ? "Yes" : "No");
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/842/](https://www.acwing.com/problem/content/842/)
