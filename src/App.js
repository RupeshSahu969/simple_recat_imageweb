import './App.css';
import React, {useState} from "react"

const data = [
  {
    id:1,
    img:"https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/0/7/c/l-rzw01tiediewhite-rodzen-original-imagmptnf6adwuht.jpeg?q=70",

  },
  {
    id:2,
    img:"https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/1/g/t/l-rzw01tiediewhite-rodzen-original-imagmptnzzzne5vc.jpeg?q=70",
    
  },
  {
    id:3,
    img:"https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/l/4/i/l-rzw01tiediewhite-rodzen-original-imagmptny5efrcjc.jpeg?q=70",
    
  },
  {
    id:4,
    img:"https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/b/n/w/l-rzw01tiediewhite-rodzen-original-imagmptngh4ncfaz.jpeg?q=70",
    
  }
]


function App() {
  
  const [imgs,setImage]=useState(data[0])


  return (
    <div style={{display:"flex", justifyContent:"center"}}>

      <div style={{display:"grid" , gridTemplateColumns:"repet(1fr,1),"  , justifyContent:"center", gap:"10px"}}>
      {data.map((item,inx) => {
        return(
          <div key={item.id}>

            <img  onClick={() => setImage(item)}
             src={item.img} alt="" width="100px" />
          </div>
        )
      })} 

     </div>

      <div style={{padding: "20px",display:"grid" , gridTemplateColumns:"repet(1fr,1),"  , justifyContent:"center", gap:"10px"}}>
      <img src={imgs.img} alt="img" />
      </div>
     
     
     
    </div>
  );
}

export default App;
