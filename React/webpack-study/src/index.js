import React from 'react'
import ReactDOM from 'react-dom'

// const myh1 = React.createElement('h1',{},"Hei Girl")
// const mydiv = React.createElement('div',{},"Hello React",myh1)

// const mydiv = <div id="div">
//   Hello React
//   <h1 className="h">Hello Girl</h1>
// </div>

// ReactDOM.render(mydiv,document.getElementById('app'))

// const mydiv = [
//   <span>嘿</span>,
//   <h1>哈</h1>
// ]

let a = "hhh"

const arr = [ "呃","啊","嗯" ]

const newArr = []
arr.forEach(item => {
  let temp = <h3 key={ item }>{ item }</h3>
  newArr.push(temp)
})

// 无状态组件
function Hello (props) { 
  return (
    <div>
      <h3>我是组件</h3>
      <h3>{ props.name }</h3>
      <h3>{ props.age }</h3>
    </div>
  )
}
const obj = {
  name: "zs",
  age: 10
}

ReactDOM.render(<div>
  123
  <hr />
  { a }
  <hr />
  {/* { mydiv } */}
  <hr />
  { newArr }
  <hr />
  {arr.map(item => {
    return <h2 key={ item }>{ item } + "~~"</h2>
  })}
  <hr />
  {/* <Hello name={ obj.name } age={ obj.age }></Hello> */}
  {/* 属性扩散 ... */}
  <Hello { ...obj } /> 

</div>,document.getElementById("app"))
