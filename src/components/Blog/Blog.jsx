

const Blog = ({blog,handleClickCard,handleTimes}) => {
  const handleClick=(time)=>{
    handleClickCard(blog)
    handleTimes(time)

  }
    const {Cover,Heading,Title,Price,Time}=blog
    return (
        <div className="card card-compact w-[280px]  bg-base-100 shadow-xl mt-5">
        <figure><img src={Cover} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{Heading}</h2>
          <p>{Title}</p>
          
          <div className="flex justify-between">
          <p>$ Price :{Price}</p>
          <p>Credit : {Time}</p>
          </div>

          {/* btn */}
            <button onClick={()=>handleClick(Time)}  className="btn btn-primary w-[90%] mx-auto">Buy Now</button>
        </div>
      </div>
    );
};

export default Blog;