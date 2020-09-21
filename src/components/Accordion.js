import React, {useState} from 'react';


const Accordion = (props) => {
  

  const [activeIndex, setActiveIndex] = useState(null);




  const onTitleClick = (index) => {
    setActiveIndex(index)
  };


  const renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div 
          className={`title ${active}`}
          onClick ={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div> 
    </React.Fragment>
    );
  });



  return <div className="ui styled accordion">
    {renderedItems}
  </div>
}







// const Counter = () => {

//   const [count, setCount] = useState(0);

//   const onAddClick = () => {
//     setCount(count+1)
//   } 


//   const renderedItems = 
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={onAddClick}>+1</button>
//       <button onClick={() => setCount(count-1)}>-1</button>
//     </div>
//   return <div>{renderedItems}</div>
// }
// export {Counter as Counter};

export default Accordion 