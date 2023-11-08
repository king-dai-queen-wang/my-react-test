import logo from './logo.svg';
import './App.css';
import Demo from './components/DemoClass.jsx';
import DemoFun from './components/DemoFun.jsx';
function App() {
  return (
    <div className="App">
      
        {(() => {
          console.log('刷新')
          return '刷新'
        })()}
        <Demo/>
        <DemoFun hello="我是传参"></DemoFun>
        <p>
            编辑 <code>src/App.js</code> 保存刷新.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            学习react
          </a>

      
    </div>
  );
}

export default App;
