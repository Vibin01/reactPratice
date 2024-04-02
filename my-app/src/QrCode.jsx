

import { useState } from 'react'

 export const QrCode = (props) => {
    const [img,setImg]=useState("");
    const [loading,setLoading]=useState(false)
    const [qrdata,setQrData]=useState("vibin")
    const [qrSize,setQrSize]=useState("150")

function  downloadQR(){
  fetch(img).then((Response)=>Response.blob()).then((blob)=>{
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download="rqcode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}).catch((err)=>{
  console.error("Error Downloading QR code",err)
})
}

   async function generateQR(){
    setLoading(true);
    
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    }
    catch(err){
console.error("Error generation",err)
    }
    finally{
setLoading(false)
    }
   }
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait....</p>}
       {img && <img className='qrImage' src={img} alt="" />} 
     <div>
        <label className='input-label' htmlFor="dataInput">Data for QR Code: </label>
        <input type="text" value={qrdata} onChange={(e)=>setQrData(e.target.value)} id='dataInput' />
        <label className='input-label' htmlFor="sizeInput">Image Size(e.g., 150): </label>
        <input type="text" value={qrSize} onChange={(e)=>setQrSize(e.target.value)} id='sizeInput' />
        <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='download-button' onClick={downloadQR}>Download QR Code</button>
     </div>

    </div>
  )
}



