---
title: "Huawei 转正实习笔试第三题"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "有n个微服务，n条边，这个图的每个连通分量就是一个微服务集群，每个集群的L为这个连通分量的元素个数，V为不在环内的元素个数，H = L - V为该集群的内聚程度，求最大内聚程度的集群，并按照元素从小到大依次输出环内的元素"
---

## 并查集维护连通分量和连通分量内元素个数 + DFS确定每个元素是否在环内 + 构建结构体数组进行排序 + DFS输出

时间：`O(NLogN)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>
#include <algorithm>
#include <vector>
#include <unordered_map>

using namespace std;

const int N = 100010;
int h[N], e[N], ne[N], idx = 0;
int n;
int p[N], s[N];
struct MicroServiceGroup {
    int fatherid, ls, vs, hs;
    vector<int> groupids;
    bool operator<(const MicroServiceGroup& other)const {
        return hs < other.hs;
    }
} groups[N];
int groupidx = 0;
unordered_map<int, vector<int>> map;
bool circle[N], st[N];
int uniqueidx = 0;
bool flag = true;

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

void merge(int a, int b) {
    int pa = find(a);
    int pb = find(b);
    if (pa != pb) {
        p[pa] = pb;
        s[pb] += s[pa];
    }
}

void dfs(int x) {
    for (int i = h[x]; i != -1; i = ne[i]) {
        int j = e[i];
        if (st[j]) {
            if (j == uniqueidx) flag = false;
            return;
        }
        st[j] = true;
        dfs(j);
    }
}

void dfs_print(int x) {
    for (int i = h[x]; i != -1; i = ne[i]) {
        int j = e[i];
        if (st[j]) {
            return;
        }
        st[j] = true;
        cout << ' ' << j;
        dfs_print(j);
    }
}

int main()
{
    cin >> n;
    memset(h, -1, sizeof h);
    for (int i = 0; i < n; i++) {
        p[i] = i;
        s[i] = 1;
    }
    for (int i = 0; i < n; i++) {
        int a, b;
        a = i;
        cin >> b;
        add(a, b);
        merge(a, b);
    }
    for (int i = 0; i < n; i++) {
        if (p[i] == i) groups[groupidx++].fatherid = i;
        else map[p[i]].push_back(i);
    }
    for (int i = 0; i < n; i++) {
        uniqueidx = i;
        memset(st, false, sizeof st);
        st[i] = true;
        flag = true;
        dfs(i);
        if (flag) circle[i] = false;
        else circle[i] = true;
    }
    for (int i = 0; i < groupidx; i++) {
        groups[i].groupids = map[groups[i].fatherid];
        groups[i].ls = groups[i].groupids.size() + 1;
        for (int j = 0; j < groups[i].groupids.size(); j++) {
            if (!circle[groups[i].groupids[j]]) groups[i].vs++;
        }
        groups[i].hs = groups[i].ls - groups[i].vs;
        // cout << groups[i].fatherid << endl;
        // for (auto item : groups[i].groupids) cout << item << ' ';
        // cout << endl;
    }
    sort(groups, groups + groupidx);
    int minval = 2000000;
    for (auto item : groups[groupidx - 1].groupids) {
        if (circle[item] && minval > item) minval = item;
    }
    if (circle[groups[groupidx - 1].fatherid < minval] && groups[groupidx - 1].fatherid < minval) minval = groups[groupidx - 1].fatherid;
    memset(st, false, sizeof st);
    st[minval] = true;
    cout << minval;
    dfs_print(minval);
    return 0;
}

/*
 * 4 3 3 0 2
 */
```