import React,{useState,useEffect} from 'react'
import axios  from 'axios'

export default function All_category() {
let [data,setData] = useState([])

useEffect(()=>{
  async function fetch(){
    try{
        let res = await axios.post("http://localhost:8080/api/category/show-category")
        setData(res.data.category)
    }
    catch(err){
      console.error(err)
    }
   
  }
  fetch();
},[])
  return (
    <div>
      <h1 className="font-weight-normal font-2 text-center my-5 mb-5">
        ALL CATEGORY
        </h1>
        <div className="new_drop mx-5">
          <div className="row">
            {
              data.map((category)=>(
              <div className="col-md-3 mouse-pointer overflow-hidden all-cat-eff" key={category._id}>
              <img
                src={`http://localhost:8080/${category.image}`}
                alt="" className='all-cat-img'
                style={{
                  width:"100%",
                }}
              />
              <div className="text-container text-center">
                <p className="font-weight-light new font-1 my-5 fs-4 all-cat-text" >
                {category.name}
                </p>
               
               
              </div>

            </div>
              ))
            }

            

          </div>
        </div>
       
      </div>
   
  )
}
