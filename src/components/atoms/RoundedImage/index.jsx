import { RoundedImageBackground } from './index'

const RoundedImage = ({ src, alt, width }) => {
  return (
    <RoundedImageBackground
      className={` ${styles[width]}`}
      src={src}
      alt={alt}
    />
  )
}

export default RoundedImage
