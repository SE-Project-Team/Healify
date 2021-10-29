import React,{useState} from "react"
import newsstyles from "./News.module.css";

   return(
       <>
       <form onSubmit={handleSubmit}>
       <div className={"container"+"  "+newsstyles.searchbody}>
        <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
            <div className={newsstyles.search}> 
            <i className={"fa fa-search"+"  "+newsstyles.fasearch}></i> 
            <input type="text" className={"form-control"+" "+newsstyles.searchinput} placeholder="Search news" onChange={(e)=>{settext(e.target.value)}}/> 
            <button type="submit" className={"btn btn-primary"+"  "+newsstyles.searchbtn}>Search</button> </div>
        </div>
       </div>
    </div> 
    </form>
    </>
   );  
   }  
export default Search;