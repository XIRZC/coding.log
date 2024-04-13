---
title: "AcWing 791 - 高精度加法"
pubDate: "2024-4-7"
categories: ["AcWing"]
description: "给定两个正整数（不含前导 0），计算它们的和，1≤整数长度≤100000"
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

int main() {
    cin >> a >> b;
    int na = strlen(a), nb = strlen(b);
    int i = na - 1, j = nb - 1, up = 0, k = 0;
    while (i >= 0 || j >= 0 || up > 0) {
        int sum = 0;
        if (i >= 0) sum += (a[i--] - '0');
        if (j >= 0) sum += (b[j--] - '0');
        sum += up;
        c[k++] = sum % 10;
        up = sum / 10;
    }
    while (k-- > 0) cout << c[k];
    return 0;
}
```

## 优化模板

```c++
#include <iostream>
#include <vector>

using namespace std;

vector<int> add(vector<int> A, vector<int> B) {
    vector<int> C(max(A.size(), B.size()) + 10, 0);
    for (int i = 0; i < A.size(); i++) C[i] += A[i];
    for (int i = 0; i < B.size(); i++) C[i] += B[i];
    int up = 0;
    for (int i = 0; i < C.size() || up; i++) {
        up += C[i];
        C[i] = up % 10;
        up /= 10;
    }
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    string a, b;
    cin >> a >> b;
    vector<int> A, B;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i--) B.push_back(b[i] - '0');

    vector<int> C = add(A, B);

    for (int i = C.size() - 1; i >= 0; i--) cout << C[i];
    return 0;
}
```

> [https://www.acwing.com/problem/content/description/793/](https://www.acwing.com/problem/content/description/793/)
