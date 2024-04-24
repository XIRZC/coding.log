---
title: "Interview 2 - 查找前K个最大的数"
pubDate: "2024-4-21"
categories: ["Interview"]
description: "查找前K个最大的数"
---

## 查找前K个最大的数-线性K为常数做法

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <climits>

using namespace std;

const int N = 1010;

int main() {
    int n;
    cin >> n;
    int b1 = INT_MIN, b2 = INT_MIN, b3 = INT_MIN, b4 = INT_MIN;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (x > b1) {
            b4 = b3;
            b3 = b2;
            b2 = b1;
            b1 = x;
        }
        else if (x > b2) {
            b4 = b3;
            b3 = b2;
            b2 = x;
        }
        else if (x > b3) {
            b4 = b3;
            b3 = x;
        }
        else {
            b4 = x;
        }
    }
    cout << b1 << ' ' << b2 << ' ' << b3 << ' ' << b4;
    return 0;
}

/*
5
1 6 3 4 2
*/
```

## 堆做法

时间：`O(NlogN)` 空间：O(N)

```c++
#include <iostream>
#include <queue>

using namespace std;

const int N = 1010;

int main() {
    int n, k;
    cin >> n >> k;
    priority_queue<int> heap;
    while (n--) {
        int x;
        cin >> x;
        heap.push(x);
    }
    while (k--) {
        cout << heap.top() << ' ';
        heap.pop();
    }
    return 0;
}

/*
5 4
1 6 3 4 2
*/
```

## 排序做法-手写排序

时间：`O(NLogN)` 空间：`O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int tmp[N];

void merge_sort(int a[], int l, int r) {
    if (l >=r ) return;
    int m = l + r >> 1;
    merge_sort(a, l, m);
    merge_sort(a, m + 1, r);
    int i = l, j = m + 1, k = 0;
    while (i <= m && j <= r) {
        if (a[i] <= a[j]) tmp[k++] = a[i++];
        else tmp[k++] = a[j++];
    }
    while (i <= m) tmp[k++] = a[i++];
    while (j <= r) tmp[k++] = a[j++];
    for (int i = l; i <= r; i++) a[i] = tmp[i - l];
}

void quick_sort(int a[] ,int l, int r) {
    if (l >= r)  return;
    int i = l - 1, j = r + 1, p = a[l + r >> 1];
    while (i < j) {
        while (a[++i] < p);
        while (a[--j] > p);
        if (i < j) swap(a[i], a[j]);
    }
    quick_sort(a, l, j);
    quick_sort(a, j + 1, r);
}

int main() {
    int n, k, a[N];
    cin >> n >> k;
    for (int i = 0; i < n; i++) cin >> a[i];
//    quick_sort(a, 0, n - 1);
    merge_sort(a, 0, n - 1);
    int i = n - 1;
    while (k--) cout << a[i--] << ' ';
    return 0;
}

/*
5 4
1 6 3 4 2
*/
```