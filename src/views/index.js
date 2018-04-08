import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from '../jsx/components/comment';
import '../css/index.css';

var data = {
    commentText: '相等判断操作会将两边的类型都转换为数字然后再比较因为都会转换为我们可以理解一个数组只不过为空而已那么为右侧则为然后转换为数字左侧直接转换为数字因为空数组会转换为所以尽管我们认为为这里却变成了是一个过去常用的获取元素的方法特别是老版本的但是从未进入标准尽管广泛使用在过去的代码中当新的突出来后就被淘汰了标准委员会不得不觉得怎么处理它可是因为它已经被广泛使用所以委员会觉得保留它但是违背了的规范标准委员会不得不觉得怎么处理它可是因为它已经被广泛使用所以委员会觉得保留它但是违背了的规范标准委员会不得不觉得怎么处理它可是因为它已经被广泛使用所以委员会觉得保留它但是违背了的规范',
    ellipsisCommentText: '',
    chineseWidth: '',
    expandFlag: false,
    replies:[
        {fromUser: '马庆忠', toUser: '', content: '感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！感谢留言，您遇到的问题我们已经通过，正在尽快处理中，请期待下次版本的更新！', time: '2018.3.2 15:36'},
        {fromUser: 'Poinfy', toUser: '马庆忠', content: '很高兴意见被采纳，期待版本更新。', time: '2018.3.2 15:36'},
        {fromUser: '马庆忠', toUser: 'Poinfy', content: '版本已经更新完成，欢迎踊跃提议！', time: '2018.3.2 15:36'},
    ]
};

ReactDOM.render(
    <Comment data={data} />,
    document.getElementById('root')
)