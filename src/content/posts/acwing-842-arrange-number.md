---
title: "AcWing 842 - 排列数字"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "排列数字"
---

## 回溯

时间：`O(N!)` 空间： `O(N)`

```c++
#include <iostream>
#include <vector>

using namespace std;

const int N = 10;
bool used[N];
vector<int> path;

void backTrack(int l, int n) {
    if (l == n) {
        for (auto item : path) cout << item << ' ';
        cout << endl;
        return;
    }
    for (int i = 1; i <= n; i++) {
        if (!used[i]) {
            path.push_back(i);
            used[i] = true;
            backTrack(l + 1, n);
            used[i] = false;
            path.pop_back();
        }
    }
}

int main() {
    int n;
    cin >> n;
    backTrack(0, n);
}
```

## 二进制空间优化

时间：`O(N!)` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

const int N = 10;
int path[N], n;

void dfs(int l, int state) {
    if (l == n) {
        for (int i = 0; i < n; i++) cout << path[i] << ' ';
        cout << endl;
        return;
    }
    for (int i = 0; i < n; i++) {
        if (!(state >> i & 1)) {
            path[l] = i + 1;
            dfs(l + 1, (1 << i) + state);
        }
    }
}

int main() {
    cin >> n;
    dfs(0, 0);
}

```

> [https://www.acwing.com/problem/content/844/](https://www.acwing.com/problem/content/844/)
