---
title: "AcWing 835 - Trie字符串统计"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "通过构建Trie树快速查询字符串的数量"
---

## Trie 数-字符串插入查找

时间：`O(NLogN)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int p[N][26], idx = 0, n, d[N];

void insert(string str) {
    int node = 0;
    for (int i = 0; i < str.size(); i++) {
        int ch = str[i] - 'a';
        if (!p[node][ch]) p[node][ch] = ++idx;
        node = p[node][ch];
    }
    d[node]++;
}

int find(string str) {
    int node = 0;
    for (int i = 0; i < str.size(); i++) {
        int ch = str[i] - 'a';
        if (!p[node][ch]) return 0;
        node = p[node][ch];
    }
    return node;
}

int main() {
    cin >> n;
    while (n--) {
        string op, str;
        cin >> op >> str;
        if (op == "I") insert(str);
        else cout << d[find(str)] << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/837/](https://www.acwing.com/problem/content/837/)
