const HeroSection=()=>{
    return(
      <main className="hero container" style={{ paddingLeft: '48vh', paddingTop: '3vh' }}>
     <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST</p>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. 
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
         <p>Also Available On</p>
         <div className="brand-icon">
          <img src="/images/amazon.png" alt="amazon-logo" srcset=""  style={{height:"5vh"}}/>
          <img src="/images/flipkart.png" alt="flipkart-logo" srcset=""  style={{height:"4vh"}} />
         </div>
        </div>
     </div>
     <div className="hero-icons">
       <img src="/images/Shoes.png" alt="" srcset="" style={{height:"73vh"}} />
     </div>
     <div className="hero-image">

     </div>
     </main>
    )
};
export default HeroSection;