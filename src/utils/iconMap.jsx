import {
  FaTrophy, FaEye, FaGem, FaBullseye,
  FaBolt, FaCode, FaLink, FaBoxOpen, FaShieldAlt, FaPaintBrush,
  FaBriefcase, FaHeadset, FaBullhorn, FaGlobe, FaShoppingCart,
  FaGlobeAmericas, FaMobileAlt, FaCloud, FaRocket, FaRobot, FaLock,
  FaHospital, FaUniversity, FaShoppingBag, FaGraduationCap, FaIndustry, FaTruck,
  FaLightbulb, FaBuilding, FaHandshake, FaSyncAlt,
  FaMedal, FaCloud as FaCloudIcon, FaStar,
} from 'react-icons/fa'

const iconMap = {
  FaTrophy, FaEye, FaGem, FaBullseye,
  FaBolt, FaCode, FaLink, FaBoxOpen, FaShieldAlt, FaPaintBrush,
  FaBriefcase, FaHeadset, FaBullhorn, FaGlobe, FaShoppingCart,
  FaGlobeAmericas, FaMobileAlt, FaCloud, FaRocket, FaRobot, FaLock,
  FaHospital, FaUniversity, FaShoppingBag, FaGraduationCap, FaIndustry, FaTruck,
  FaLightbulb, FaBuilding, FaHandshake, FaSyncAlt,
  FaMedal, FaStar,
  // aliases used in JSON
  FaMobile: FaMobileAlt,
}

export function Icon({ name, size = 20, className = '', style = {} }) {
  const Comp = iconMap[name]
  if (!Comp) return null
  return <Comp size={size} className={className} style={style} />
}
