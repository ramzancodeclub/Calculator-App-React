
const button = ({data, onClick}) => {
  return (
    <>
        <button className="btn" onClick={onClick}>{data}</button>
    </>
  )
}

export default button