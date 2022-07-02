import 'rc-slider/assets/index.css';
import Slider from 'rc-slider'

const styles={margin:"1rem 0.5rem 2rem 0rem"}

const ReactSlider  =()=>{
    return(
        <div style={styles}>
            <Slider marks={{25:'25%',50:'50%',75:'75%',100:'100%'}} step={null} railStyle={{backgroundColor:"#fff"}} trackStyle={{backgroundColor:"#198be3"}}/>
        </div>
    )
}

export default ReactSlider