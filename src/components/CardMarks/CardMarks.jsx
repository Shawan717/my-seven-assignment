import CardMark from "../CardMark/CardMark";


const CardMarks = ({cardMark,times}) => {
    return (
       
       
        <div className="w-1/3 mt-5 rounded-lg bg-white p-5">
           <div>
            <h3 className="text-3xl text-[#2F80ED] mb-4 ">Credit Hour Remaining {times} hr</h3>
            <hr />
           </div>
           <h1 className="text-[20px] font-bold text-[#1C1B1B] my-3">Course Name</h1>
           {
            cardMark.map(card=><CardMark key={card.Id} CardMarkss={card}></CardMark>)
           } 
        </div>
    );
};

export default CardMarks;