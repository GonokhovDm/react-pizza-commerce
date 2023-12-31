import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="135" r="125" /> 
    <rect x="0" y="291" rx="10" ry="10" width="280" height="20" /> 
    <rect x="0" y="326" rx="10" ry="10" width="280" height="78" /> 
    <rect x="-2" y="423" rx="10" ry="10" width="95" height="30" /> 
    <rect x="120" y="416" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton