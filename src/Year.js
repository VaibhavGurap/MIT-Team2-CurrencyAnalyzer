import React,{ useState } from "react"; 


function Dropdown ( { selected , setSelected } ) {
  const [ isActive , setIsActive ] = useState(false);
  const options = ["2012" ,"2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
  return (
    <div className = " dropdown" >
        <div className = " dropdown-btn" onClick = {() =>setIsActive(!isActive)}>
          {selected}
          <i className = " fa fa-caret-down "></i>
        </div>
        { isActive && (
            <div className = "dropdown-content" >
                {options.map ((option) => (
                    <div onClick={ ()=>{
                        setSelected (option);
                        setIsActive (false);
                        }} 
                        className = " dropdown-item">
                        {option}
                    </div>
                )) }
            </div>
      )}
    </div>
  );
}

export default Dropdown;