import React    from "react";

let Section2 = () => {
    let data = [
        {
            url: "https://www.snitch.co.in/cdn/shop/files/linen_resized_1_2e29f7ad-094d-439c-97f7-c201a8c052c4.webp?v=1690638188",
            title_1: "LINEN REVERIE",
            title_2:"A Sanctuary of Comfort & Grace"
        },
        {
            url: "https://www.snitch.co.in/cdn/shop/files/y2k_resized_5d8ea962-77b6-4bec-a54f-810991cb6f0c.webp?v=1690638188",
            title_1: "Y2K",
            title_2:"Timeless Styles, Future-Forward"

        },
        {
            url: "https://www.snitch.co.in/cdn/shop/files/prints_resized_95906667-1249-48bf-83aa-84ce444f58fa.webp?v=1690638188",
            title_1: "POP PRINTS",
            title_2:"Threads of Art"

        },
        {
            url: "https://www.snitch.co.in/cdn/shop/files/basic_resized_74aae092-4724-4e11-a8b2-e1443b3aaf37.webp?v=1690638188",
            title_1: "TREND STATION",
            title_2:"Modern Must-Haves"

        }
    ]
    return (
        <>
            <div className="container my-5">
                <div className="row">
{
  data.map((d) => (
    <div className="col-md-3" >
      <div className="sec-container-img text-center">
        <img src={d.url} alt="" className="img-seter" />
        <div className="text-container text-center">
          <p className="font-weight-bold t font-1">{d.title_1}</p>
          <p className="font-weight-light d font-1">{d.title_2}</p>
        </div>
      </div>
    </div>
  ))
}

                   
                       </div>
                </div>

            <div>
                <img src="https://www.snitch.co.in/cdn/shop/files/ezgif.com-gif-maker_2_300x.webp?v=1690211398" alt="" className="w-100"/>
            </div>
        </>
    )
}
export default Section2