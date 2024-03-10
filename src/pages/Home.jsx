import Banner from "../components/Banner"
import Pricing from "../components/Pricing"

const Home = (props) => {
  return (
    <>
    <title>{props.title} - Rabnawaz</title>
      <Banner mode={props.mode} toggleMode={props.toggleMode} title={props.title} subtitle={props.subtitle} btnContent={props.btnContent} />
      <Pricing mode={props.mode} toggleMode={props.toggleMode}/>  
    </>
  )
}

export default Home