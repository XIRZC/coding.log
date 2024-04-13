---
title: "AcWing 794 - 高精度除法"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "给定两个非负整数（不含前导 0） A，B，请你计算 A/B的商和余数。1≤A的长度≤100000，0≤B≤10000，B一定不为0"
---

## 优化模板

```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> div(vector<int> A, int b, int &r) {
    vector<int> C;
    for (int i = A.size() - 1; i >= 0; i--) {
        r = r * 10 + A[i];
        C.push_back(r / b);
        r %= b;
    }
    reverse(C.begin(), C.end());
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    string a;
    int b, r = 0;
    cin >> a >> b;
    vector<int> A, C;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');

    C = div(A, b, r);

    for (int i = C.size() - 1; i >= 0; i--) cout << C[i];
    cout << endl << r;
    return 0;
}
```

> [https://www.acwing.com/problem/content/795/](https://www.acwing.com/problem/content/795/)
