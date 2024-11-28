import PropTypes from "prop-types"

export default function Room({url}) {
  return (
    <div className="w-[77%]">
      <img src={url} alt=""  className=" w-full "/>
    </div>
  )
}

Room.propTypes = {
    url: PropTypes.string
}