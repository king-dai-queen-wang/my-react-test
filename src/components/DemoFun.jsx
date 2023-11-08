import React from 'react';

export default (props) => {
    const a2 = '测试变量'
    const obj = { test: '您的年龄' };
    const shareData = {
      title: '我是标题',
      link: `我是字符串模板 ${a2}://`,
    }
    return <>
        <div>{props.hello}</div>
		<p>
			这是一段测试文案
		</p>
    </>
}