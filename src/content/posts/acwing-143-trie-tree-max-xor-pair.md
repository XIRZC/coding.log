---
title: "AcWing 143 - 最大异或对"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "在给定的N个整数 A1，A2……AN中选出两个进行xor（异或）运算，得到的结果最大是多少？"
---

## Trie 树-数字二进制插入查找

时间：`O(NLogN)` 空间： `O(N)`

```c++
#include <iostream>
#include <vector>

using namespace std;

const int N = 3200010;
int a[N], p[N][2], idx = 0, n, res = 0;

void insert(int num) {
    vector<int> tmp;
    for (int i = 0; i < 32; i++) {
        int c = num % 2;
        tmp.push_back(c);
        num /= 2;
    }
    int node = 0;
    for (int i = tmp.size() - 1; i >= 0; i--) {
        int c = tmp[i];
        if (!p[node][c]) p[node][c] = ++idx;
        node = p[node][c];
    }
}

int find(int num) {
    vector<int> tmp;
    for (int i = 0; i < 32; i++) {
        int c = num % 2;
        tmp.push_back(c);
        num /= 2;
    }
    int node = 0, other = 0;
    for (int i = tmp.size() - 1; i >= 0; i--) {
        int c = tmp[i];
        if (p[node][1 - c]) {
            node = p[node][1 - c];
            other = other * 2 + (1 - c);
        }
        else if (p[node][c]) {
            node = p[node][c];
            other = other * 2 + c;
        }
    }
    return other;
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        scanf("%d", a + i);
        insert(a[i]);
    }
    for (int i = 0; i < n; i++) {
        int x = find(a[i]);
        res = max(res, x ^ a[i]);
    }
    cout << res;
    return 0;
}
```

## 优化和简化

```c++
#include <iostream>

using namespace std;

const int N = 100010, M = 32 * N;
int p[M][2], a[N], n, res = 0, idx = 0;

void insert(int num) {
    int node = 0;
    for (int i = 30; i >= 0; i--) {
        int c = num >> i & 1;
        if (!p[node][c]) p[node][c] = ++idx;
        node = p[node][c];
    }
}

int find(int num) {
    int node = 0, other = 0;
    for (int i = 30; i >= 0; i--) {
        int c = num >> i & 1;
        if (p[node][!c]) {
            node = p[node][!c];
            other = other * 2 + !c;
        }
        else if (p[node][c]) {
            node = p[node][c];
            other = other * 2 + c;
        }
    }
    return other;
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        scanf("%d", a + i);
        insert(a[i]);
    }
    for (int i = 0; i < n; i++) {
        res = max(res, a[i] ^ find(a[i]));
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/145/](https://www.acwing.com/problem/content/145/)
