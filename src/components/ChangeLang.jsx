export default () => {
    const changeLang = () => {
        console.log('changeLang');
    }
    return <button onClick={changeLang}>切换语言</button>
}