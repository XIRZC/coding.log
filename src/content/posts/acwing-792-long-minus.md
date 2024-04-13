---
title: "AcWing 792 - 高精度减法"
pubDate: "2024-4-7"
categories: ["AcWing"]
description: "给定两个正整数（不含前导 0），计算它们的差，计算结果可能为负数，1≤整数长度≤10000"
---

## 模拟

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 100010;
char a[N], b[N];
int c[N];

int is_great_than(char b[], char a[]) {
    int na = strlen(a), nb = strlen(b);
    if (na < nb) return 1;
    else if (na == nb) {
        for (int i = 0; i < na; i++) {
            if (b[i] > a[i]) return 1;
            else if (b[i] < a[i]) return -1;
        }
        return 0;
    }
    else return -1;
}

int main() {
    cin >> a >> b;
    int na = strlen(a);
    int nb = strlen(b);
    int sign = 1;
    int res = is_great_than(b, a);
    if (res == 1) {
        sign = -1;
        for (int k = 0; k < max(na, nb); k++) swap(a[k], b[k]);
        int t = na;
        na = nb;
        nb = t;
    }
    else if (res == 0) {
        cout << 0;
        return 0;
    }
    int i = na - 1, j = nb - 1, k = 0, down = 0;
    while (i >= 0 || j >= 0) {
        int ai = 0, bj = 0;
        if (i >= 0) ai = a[i--] - '0';
        if (j >= 0) bj = b[j--] - '0';
        int diff = 0;
        diff += (ai - bj - down);
        if (diff < 0) {
            diff += 10;
            down = 1;
        }
        else down = 0;
        c[k++] = diff;
    }
    if (down > 0 || sign == -1) cout << '-';
    k--;
    bool flag = false;
    while (k >= 0) {
        if (!flag) {
            if (c[k] != 0) {
                cout << c[k];
                flag = true;
            }
        }
        else cout << c[k];
        k--;
    }
    return 0;
}
```

## 优化模板

```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(vector<int> A, vector<int> B) {
    if (A.size() != B.size()) return A.size() >= B.size();
    else {
        for (int i = A.size() - 1; i >= 0; i--) {
            if (A[i] != B[i]) return A[i] >= B[i];
        }
        return true;
    }
}

vector<int> sub(vector<int> A, vector<int> B) {
    vector<int> C;
    int down = 0;
    for (int i = 0; i < A.size(); i++) {
        int tmp = A[i] - down;
        if (i < B.size()) tmp = tmp - B[i];
        C.push_back((tmp + 10) % 10);
        if (tmp < 0) down = 1;
        else down = 0;
    }
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    string a, b;
    cin >> a >> b;
    vector<int> A, B, C;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i--) B.push_back(b[i] - '0');

    if (cmp(A, B)) C = sub(A, B);
    else {
        C = sub(B, A);
        cout << '-';
    }
    for (int i = C.size() - 1; i >= 0; i--) cout << C[i];


    return 0;
}
```

> [https://www.acwing.com/problem/content/794/](https://www.acwing.com/problem/content/794/)
