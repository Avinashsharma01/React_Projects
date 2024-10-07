import { useState } from "react"

function RandomColor() {


    const [typeOfColor, setTypeOfColor]=useState('hex')
    const [color, setColor]=useState("#ffffff")


    let GenerateHexColor=()=>{
        let hexValues=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        let hex='#'

        for(let i=0; i<6; i++){
            let RandomColor= Math.floor(Math.random()* hexValues.length)
            hex+=hexValues[RandomColor]
        }
        console.log(hex)
        // typeOfColor(hex)
        setColor(hex)
    }



    let GenerateRgbColor=()=>{
        let RandomColorForRGB=Math.floor(Math.random()*256)
        let r=RandomColorForRGB
        let g=RandomColorForRGB
        let b=RandomColorForRGB
        setColor(`rgb(${r},${g},${b})`)
        console.log("first")
        console.log(color)
    }


    let randomColorUtility=()=>{
        return Math.floor(Math.random()*100)
    }


    let Opacity=()=>{
        return Math.random().toFixed(3)
    }
    let GenerateHSLColor=()=>{
        let h=randomColorUtility()
        let s=randomColorUtility()
        let l=randomColorUtility()
        let a=Opacity()

        setColor(`hsl(${h},${s}%,${l}%, ${a})`)
        console.log(color)

    }

   
  return (
    <div className="Wrapper flex-col  w-full h-screen p-20  flex justify-around items-center"  style={{
        background:color
    }}>
        <div className="allButton">
        <button className="bg-cyan-700 mr-2 p-2 hover:bg-cyan-900  text-white  rounded-2xl active:bg-red-700 active:text-white " onClick={()=> setTypeOfColor('hex')} >GenerateHexColor</button>
        <button className="bg-cyan-700 mr-2 p-2 hover:bg-cyan-900  text-white  rounded-2xl active:bg-red-700 active:text-white " onClick={()=> setTypeOfColor('rgb')} >GenerateRGBColor</button>
        <button className="bg-cyan-700 mr-2 p-2 hover:bg-cyan-900  text-white  rounded-2xl active:bg-red-700 active:text-white " onClick={()=> setTypeOfColor('hsl')} >GenerateHSLColor</button>
        {/* <button className="bg-cyan-700 mr-2 p-2" onClick={()=> typeOfColor==='hex'?GenerateHexColor():GenerateRgbColor()} >GenerateColor</button> */}
        <button className="bg-blue-700 mr-2 p-2  text-white  rounded-2xl" onClick={()=> {
            if(typeOfColor==='hex'){
                GenerateHexColor()
            }
            else if(typeOfColor==='rgb' ){
                GenerateRgbColor()
            }
            else{
                GenerateHSLColor()
            }
        }} >GenerateColor</button>


        
        </div>

        <div className="color">
            <h1 className="text-6xl">  {color} </h1>
        </div>
    </div>
  )
}

export default RandomColor