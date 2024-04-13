---
title: "牛客-饿了么24秋招工程方向&算法方向"
pubDate: "2024-4-12"
categories: ["NowCoder"]
description: "牛客-饿了么24秋招工程方向&算法方向"
---

## 1.小红送外卖

堆优化 Dijkstra`O(NLogM)`算出所有学校到美食街的最短路，然后`O(K)`计算往返路径和

```c++
#include <iostream>
#include <cstring>
#include <queue>
#include <algorithm>

using namespace std;

typedef pair<int, int> PII;

const int N = 1000010, INF = 0x3f3f3f3f;
int h[N], e[N], ne[N], w[N], idx = 0;
int d[N], n, m, k;
long long res = 0;
bool st[N];

void add(int a, int b, int c) {
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx++;
}

void dijkstra() {
    memset(d, 0x3f, sizeof d);
    d[1] = 0;
    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, 1});
    while (heap.size()) {
        auto f = heap.top();
        heap.pop();

        int v = f.second, dist = f.first;
        if (st[v]) continue;
        st[v] = true;

        for (int i = h[v]; i != -1; i = ne[i]) {
            int j = e[i];
            int wt = w[i];
            if (dist + wt < d[j]) {
                d[j] = dist + wt;
                heap.push({d[j], j});
            }
        }
    }
}

int main() {
    cin >> n >> m >> k;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c);
        add(b, a, c);
    }
    dijkstra();
    while (k--) {
        int x;
        cin >> x;
        res += d[x] * 2;
    }
    cout << res;
    return 0;
}
```

## 2.小红等外卖

模拟题：当下单时间在 22-23 并且预期送达在 0-1 之间时，将预期送达小时数加 24，然后进行预期和实际时分的比较

```c++
#include <iostream>
using namespace std;

bool cmp(int ha, int ma, int hb, int mb) {
    if (ha != hb) return ha > hb;
    else return ma >= mb;
}

int ch2num(char ch) {
    return ch - '0';
}

void cal(string a, string b, int& h, int& m) {
    int ha = ch2num(a[0]) * 10 + ch2num(a[1]);
    h = ch2num(b[0]) * 10 + ch2num(b[1]);
    m = ch2num(b[3]) * 10 + ch2num(b[4]);
    if (ha >= 22 && h <= 1) h += 24;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        string a, b, c;
        cin >> a >> b >> c;
        int ha = 0, hb = 0, ma = 0, mb = 0;
        cal(a, b, ha, ma);
        cal(a, c, hb, mb);
        puts(cmp(ha, ma, hb, mb) ? "No" : "Yes");
    }
    return 0;
}
```

## 3.小红的字符串构造

贪心思想：对去重之后的字符进行排序，遍历原字符串，每次从排序去重集合中取元素，每次遇到相同字符则取后一个字符，如未遇到则正常取当前字符，如果去重之后字符集合长度为 1，则一定无解，输出-1

```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    string str, target = "";
    cin >> str;
    vector<char> set;
    for (int i = 0; i < str.size(); i++) set.push_back(str[i]);
    sort(set.begin(), set.end());
    set.erase(unique(set.begin(), set.end()), set.end());
    int idx = 0, sz = set.size();
    if (sz == 1) target = "-1";
    else {
        for (int i = 0; i < str.size(); i++, idx++) {
            if (str[i] == set[idx % sz]) target += set[(idx + 1) % sz];
            else target += set[idx % sz];
        }
    }
    cout << target;
    return 0;
}
```

> [https://www.nowcoder.com/exam/test/79426870/detail?pid=55238116](https://www.nowcoder.com/exam/test/79426870/detail?pid=55238116)
