import { RoundedImageBackground } from './styles.js'

const RoundedImage = ({ src, alt, width }) => {
  return <RoundedImageBackground className={` ${width}`} src={src} alt={alt} />
}

export default RoundedImage
