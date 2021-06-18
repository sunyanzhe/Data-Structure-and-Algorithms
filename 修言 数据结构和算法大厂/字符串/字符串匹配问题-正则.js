/**
 * 
 * 真题描述： 设计一个支持以下两种操作的数据结构：
    void addWord(word)
    bool search(word)
    search(word) 可以搜索文字或正则表达式字符串，
    字符串只包含字母 . 或 a-z 。
    可以表示任何一个字母。
 */

 /**
  * 示例
  * addWord("bad")
  * addWord("dad")
  * addWord("mad")
  * search("pad") -> false
  * search(".ad") -> true
  * search("b..") -> true
  */

(function(window) {
    let map = {}
    const addWord = (word) => {
        let len = word.length
        if (map[len]) {
            map[len].push(word)
        } else {
            map[len] = [word]
        }
    }
    const serch = (word) => {
        let len = word.length,
            list = map[len],
            match = new RegExp(word);
        if (!list) return false
        return list.findIndex(item => match.test(item)) > -1
    }
    window.addWord = addWord
    window.serch = serch
})(window)