// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {ImageListDetails, ActiveImageItem, ActiveThumbnail} = props

  const {thumbnailUrl, thumbnailAltText, id} = ImageListDetails

  const OnClickThumbnailImage = () => {
    ActiveImageItem(id)
  }

  const ActiveClassName = ActiveThumbnail ? 'isActive' : 'thumbnail'

  return (
    <li className="Thumbnail-list-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={OnClickThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${ActiveClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
