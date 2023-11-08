import React from 'react';

export default (props) => {
    const a2 = 'david'
    const obj = { test: '您的年龄' };
    const shareData = {
      title: '我是标题',
      link: `字符串模板： 我是 ${a2}`,
    }
    return <>
        <div>{props.hello}</div>
		<p>
			这是一段测试文案 {obj.test}
		</p>
        <p>
            {shareData.title}
            {shareData.link}
        </p>
    </>
}