---
title: "AcWing 154 - 滑动窗口"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "滑动窗口最大值"
---

## 单调队列

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1000010;
int frmin = 1, bkmin = 0, frmax = 1, bkmax = 0, n, k, a[N], qmin[N], qmax[N];

int main() {
    cin >> n >> k;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        while (bkmin >= frmin && a[i] <= a[qmin[bkmin]]) bkmin--;
        qmin[++bkmin] = i;
        while (frmin <= bkmin && i - qmin[frmin] + 1 > k) frmin++;
        if (i + 1 >= k) cout << a[qmin[frmin]] << ' ';
    }
    cout << endl;
    for (int i = 0; i < n; i++) {
        while (bkmax >= frmax && a[i] >= a[qmax[bkmax]]) bkmax--;
        qmax[++bkmax] = i;
        while (frmax <= bkmax && i - qmax[frmax] + 1 > k) frmax++;
        if (i + 1 >= k) cout << a[qmax[frmax]] << ' ';
    }
    return 0;
}
```

## Java 解法

```java
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        Deque<Integer> qmin = new ArrayDeque<>(), qmax = new ArrayDeque<>();
        String[] line = br.readLine().split(" ");
        int n = Integer.parseInt(line[0]);
        int k = Integer.parseInt(line[1]);
        int[] array = new int[n];
        String[] nums = br.readLine().split(" ");
        for (int i = 0; i < n; i++) array[i] = Integer.parseInt(nums[i]);
        for (int i = 0; i < n; i++) {
            int x = array[i];
            while (!qmin.isEmpty() && x <= array[qmin.peekLast()]) qmin.removeLast();
            qmin.addLast(i);
            while (!qmin.isEmpty() && i - qmin.peekFirst() + 1 > k) qmin.removeFirst();
            if (i + 1 >= k) bw.write(array[qmin.peekFirst()] + " ");
        }
        bw.write("\n");
        for (int i = 0; i < n; i++) {
            int x = array[i];
            while (!qmax.isEmpty() && x >= array[qmax.peekLast()]) qmax.removeLast();
            qmax.addLast(i);
            while (!qmax.isEmpty() && i - qmax.peekFirst() + 1 > k) qmax.removeFirst();
            if (i + 1 >= k) bw.write(array[qmax.peekFirst()] + " ");
        }
        br.close();
        bw.flush();
        bw.close();
    }
}
```

> [https://www.acwing.com/problem/content/156/](https://www.acwing.com/problem/content/156/)
