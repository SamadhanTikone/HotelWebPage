import PropTypes from "prop-types"

export default function Room({url}) {
  return (
    <div className="md:w-[80%] lg:w-[77%] mt-0 m-auto w-[100%]  p-4 lg:p-0  ">
      <img src={url} alt=""  loading="lazy" className=" w-full rounded-xl lg:rounded-none"/>
    </div>
  )
}

Room.propTypes = {
    url: PropTypes.string
}
