---
title: "AcWing 843 - n-皇后问题"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "n-皇后问题"
---

## 回溯

时间：`O(N!)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 10;
int n;
char board[N][N];

bool valid(int r, int c) {
    for (int i = 0; i < r; i++) {
        if (board[i][c] == 'Q') return false;
    }
    for (int i = 0; i < r; i++) {
        int j = c - (r - i);
        if (j >= 0 && board[i][j] == 'Q') return false;
    }
    for (int i = 0; i < r; i++) {
        int j = c + (r - i);
        if (j < n && board[i][j] == 'Q') return false;
    }
    return true;
}

void dfs(int l) {
    if (l == n) {
        for (int i = 0; i < n; i++) puts(board[i]);
        cout << endl;
        return;
    }
    for (int i = 0; i < n; i++) {
        if (valid(l, i)) {
            board[l][i] = 'Q';
            dfs(l + 1);
            board[l][i] = '.';
        }
    }
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) board[i][j] = '.';
    dfs(0);
}
```

## 空间换时间-valid 时间优化

```c++
#include <iostream>

using namespace std;

const int N = 10;
int n;
char board[N][N];
bool col[N], diag[2 * N], adiag[2 * N];

bool valid(int r, int c) {
    if (col[c] || diag[r - c + n] || adiag[r + c]) return false;
    return true;
}

void dfs(int l) {
    if (l == n) {
        for (int i = 0; i < n; i++) puts(board[i]);
        cout << endl;
        return;
    }
    for (int i = 0; i < n; i++) {
        if (valid(l, i)) {
            board[l][i] = 'Q';
            col[i] = diag[l - i + n] = adiag[l + i] = true;
            dfs(l + 1);
            col[i] = diag[l - i + n] = adiag[l + i] = false;
            board[l][i] = '.';
        }
    }
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) board[i][j] = '.';
    dfs(0);
}
```

> [https://www.acwing.com/problem/content/845/](https://www.acwing.com/problem/content/845/)
