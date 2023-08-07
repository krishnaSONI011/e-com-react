import slugify from 'slugify'

let toSlug =(name)=>{
try{
    let new_name = slugify(name)
    return new_name;
}catch(err){
    console.log(err)
}
}

export{toSlug}