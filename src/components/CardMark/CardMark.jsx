// import CardMarks from "../CardMarks/CardMarks";
import { HiArrowCircleRight } from "react-icons/hi";





const CardMark = ({CardMarkss}) => {
    const {Heading}=CardMarkss;
    return (
        
        <div className="   flex items-center">
             
           <HiArrowCircleRight></HiArrowCircleRight>
            <h2 className="text-[16px] text-#1c1b1b99 ml-2"> {Heading}</h2>
        </div>
    );
};

export default CardMark;