import './index.css'

const CardItem = props => {
  const {eachCardDetails} = props
  const {title, description, imgUrl, className} = eachCardDetails
  return (
    <li className={`card ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
