import intl from 'react-intl-universal';
import React, { useEffect, useState } from 'react';
 
const locales = {
  'en_US': require('../assets/i18n/en_US'),
  'zh_CN': require('../assets/i18n/zh_CN'),
};

export default (props) => {
    const [lang, setLang] = useState('en_US');
    const [component, setComponent] = useState(null);
    const changeLang = () => {
        setLang(lang === 'en_US' ? 'zh_CN' : 'en_US') 
    }
    
    const loadLocales = () => {
        const cloneNode = React.cloneElement(props.children)
        intl.init({
            currentLocale: lang,  // 设置初始语言
            locales
        }).then(() => {
            setComponent(cloneNode)
        })
    }


    useEffect(loadLocales, [lang])
    console.log(222);
    return <>
        <p>当前语言：{lang} </p>
        <button onClick={changeLang}>{intl.get('switchLang').d('切换语言')}</button>
        {component}
    </>
}