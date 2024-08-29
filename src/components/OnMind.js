import { ONMIND_IMG } from "../utils/constants";
const OnMind=(props)=>{
    console.log(props);

    const {minData}=props;
    const {title}=minData?.header;
    const data=minData?.imageGridCards?.info;

    return(

        <div className="flex flex-col">
            <div>
            <h2 className="font-extrabold text-2xl">{title}</h2>
            </div>
         
            

          
            <div className="flex overflow-x-scroll  " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {data.map((dataa)=>{
                const{text}=dataa?.action;
                const{imageId}=dataa;
return(

    <img key={dataa.id} src={ONMIND_IMG+imageId} className="w-[144px] h-[180px]"/>

    )
 } )}
 </div>
 </div>

)
}


export default OnMind;