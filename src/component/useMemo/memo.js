import React, { useCallback } from 'react'

export const Foo = () => {
    console.log('HomePage is rendered!');
    const [text, setText] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    const handleClick=useCallback(()=>{
    },[]);
    return (
      <>
        <input type='text'  value={text}  onChange={e => {setText(e.target.value); 
        if(e.target.value.includes("1"))
        {
            setIsChecked(true);
        }
        else{
            setIsChecked(false)
        }
        }} />
        <Bar value={isChecked} onClick={handleClick} />
      </>
    );
  };
  
  const Bar =React.memo(({ value ,onClick}) => {
    console.log('Checkbox is rendered!');
    return (
        <div>
            {value?"True":"False"}
            <button onClick={onClick}>ád</button>
        </div>
    )
  }) ;
  