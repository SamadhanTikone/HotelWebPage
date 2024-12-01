import PropTypes from "prop-types"

export default function Room({url}) {
  return (
    <div className="w-full lg:p-0 ">
      <img src={url} alt=""  loading="lazy" className=" w-full rounded-xl lg:rounded-none"/>
    </div>
  )
}
// md:w-[80%] lg:w-[75%] mt-0 m-auto w-[100%]  p-4 lg:p-0  
Room.propTypes = {
    url: PropTypes.string
}
