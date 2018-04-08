import React, {Component} from 'react';

class Comment extends React.Component{
    constructor(props){
        super();
        this.state = ({
            commentText: props.data.commentText,
            ellipsisCommentText: props.data.ellipsisCommentText,
            chineseWidth: props.data.chineseWidth,
            expandFlag: props.data.expandFlag,
            replies: props.data.replies,
        });
    }

    componentDidMount(){
        var comment = this.state.commentText;
        var replies = this.state.replies;

        var containerW = document.querySelector('.test').offsetWidth;
        var new_comment = this.ellipsisText(containerW, 3, comment)

        replies.map(v => {
            var containerW = document.querySelector('.comment-reply').querySelector('p').offsetWidth;

            v.ellipsisContent = this.ellipsisText(containerW, 2, v.content);
            v.expandFlag = false;
        })

        this.setState({
            ellipsisCommentText: new_comment,
            replies: replies
        })

    }

    calculateCharWidth(char){
        /**
         * 计算单个字符的宽度
         */
        if(char.charCodeAt(0) > 255 && this.state.chineseWidth){
            return this.state.chineseWidth;
        }

        var div = document.createElement('div');
        div.innerHTML = char;
        div.style.display = 'inline-block';
        document.querySelector('.test').append(div);
        var char_w = div.offsetWidth;
        div.remove();

        char.charCodeAt(0) > 255 && this.setState({
            chineseWidth: parseFloat(char_w)
        })
        return char_w;
    }

    ellipsisText(containerW, lineNum, text){
        var totalWidth = containerW * lineNum;

        /**占位宽度 */
        var paddingW = parseFloat(containerW / 2); 
        
        var new_text = '';
        var new_w = 0;
        var flag = true;
        for(var i=0; i<text.length; i++){
            var char_w = this.calculateCharWidth(text.charAt(i));
            if(new_w + char_w > totalWidth - paddingW){
                flag = false;
                break;
            }else{
                new_text += text.charAt(i);
                new_w += char_w;
            }
        }
        new_text += '...';
        
        if(flag){
            new_text = '';
        }
        return new_text;
    }

    viewDetailComment(){
        var expandFlag = this.state.expandFlag;
        this.setState({
            expandFlag: !expandFlag
        })
    }

    viewDetailReply(event, index){
        var replies = this.state.replies;

        replies[index].expandFlag = !replies[index].expandFlag;
        this.setState({
            replies: replies
        })
    }

    render(){
        return(
            <div className="comment">
                <div className="comment-stu">
                    <input type="checkbox"/>
                    {
                        this.state.ellipsisCommentText ?
                            this.state.expandFlag ? 
                            <span className="test">
                                {this.state.commentText}
                                <a onClick={() => this.viewDetailComment()} className="btn-more"> 收起更多</a>
                            </span>
                            :
                            <span className="test">
                                {this.state.ellipsisCommentText}
                                <a onClick={() => this.viewDetailComment()} className="btn-more"> 查看更多</a>
                            </span>
                        :
                        <span className="test">{this.state.commentText}</span>
                    }
                </div>
                <div className="comment-reply">
                    {
                        this.state.replies.map((v, i) => {
                            return(
                                i == 0 ?
                                <div key={i}>
                                    {
                                        v.ellipsisContent ? 
                                        <p>
                                            <span className="color-gray">{v.fromUser}</span>
                                            <span>：</span>
                                            {
                                                v.expandFlag ? v.content : v.ellipsisContent
                                            }
                                            <a onClick={() => this.viewDetailReply(event, i)} className="btn-more">{v.expandFlag ? ' 收起更多' : ' 查看更多'}</a>
                                        </p>    
                                        :
                                        <p>
                                            <span className="color-gray">{v.fromUser}</span>
                                            <span>：</span>
                                            {v.content}
                                        </p>
                                    }
                                    <span className='time'>{v.time}</span>
                                </div>
                                :
                                <div key={i}>
                                    {
                                        v.ellipsisContent ? 
                                        <p>
                                            <span className="color-self">{v.fromUser}</span>
                                            <span style={{'color':'#333', 'padding':'0 5px'}}>回复</span>
                                            <span className="color-gray">{v.toUser}</span>
                                            <span>：</span>
                                            {
                                                v.expandFlag ? v.content : v.ellipsisContent
                                            }
                                            <a onClick={() => this.viewDetailReply(event, i)} className="btn-more">{v.expandFlag ? ' 收起更多' : ' 查看更多'}</a>
                                        </p>    
                                        :
                                        <p>
                                            <span className="color-self">{v.fromUser}</span>
                                            <span style={{'color':'#333', 'padding':'0 5px'}}>回复</span>
                                            <span className="color-gray">{v.toUser}</span>
                                            <span>：</span>
                                            {v.content}
                                        </p>
                                    }
                                    <span className='time'>{v.time}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Comment;