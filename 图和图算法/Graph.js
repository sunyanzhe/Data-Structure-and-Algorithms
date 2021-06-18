//乍一看,图和树或者二叉树很像,你可能会尝试用树的方式创建一个图类,用节点来表示每个顶点
//但这种情况下,如果用基于对象的方式去处理就会有问题,因为图可能增长到非常大
//用对象表示图很快就会变得效率低下,所以我们要考虑表示顶点和边的其他方案

/**
 * 表示顶点
 */
class Vertex {
    /**
     * 
     * @param {*} label         标识顶点 
     * @param {*} wasVisited    表明这个顶点是否被访问过的布尔值
     */
    constructor(label, wasVisited) {
        this.label = label;
        this.wasVisited = wasVisited;
    }
}

/**
 * 表示边
 */

//图的实际信息都保存在边上,因为它们描述了图的结构
//我们表示图的边的方法称为邻接表或者邻接表数组
//这种方法将边存储为由顶点的相邻顶点列表构成的数组, 并以此为顶点作为索引.
//当程序中引用一个顶点时,可以高效的访问与这个顶点相连的所有顶点的列表
//如果顶点2和顶点0 1 3 4相连,并且存储它存储在数组中索引为2的位置,那么,访问这个元素,我们可以访问到索引为2的位置出由顶点0 1 3 4组成的数组


class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        this.edgeTo = [];
        for (let i = 0, len = this.vertices; i < len; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph() {
        for (let i = 0, len = this.vertices; i < len; i++) {
            let item = this.adj[i], str = '';
            for (let j = 0, len = item.length; j < len; j++) {
                str += `${item[j]} `;
            }
            console.log(`${i} => ${str}`);
        }
    }
    //深度搜索
    dfs(v) {
        this.marked[v] = true;
        if (this.adj[v] !== undefined) console.log(`Visited vertex:  ${v}`);
        for (let w of this.adj[v]) {
            if (!this.marked[w]) this.dfs(w);
        }
    }
    //广度搜索 对应最短路径
    bfs(s) {
        let queue = [];
        this.marked[s] = true;
        while (queue.length > 0) {
            let v = queue.shift();      //从队首移除
            if (this.adj[v] !== undefined) console.log(`Visited vertex: ${v}`);
            for (let w of this.adj[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w].push(v);
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }
    hasPathTo(v) {
        return this.marked[v]
    }
    pathTo(v) {
        let source = 0;
        if (!this.hasPathTo(v)) return undefined
        let path = [];
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }
}








