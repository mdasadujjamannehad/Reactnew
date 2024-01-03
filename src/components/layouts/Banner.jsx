import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Para from '../Para'
import Headingbtn from '../Headingbtn'
import Image from '../Image'
import BannerImg from '../../assets/BannerImg.png'

const Banner = () => {
  return (
    <div className='py-28 bg-headerBg' >
       <Container>
        <Flex>
            <div className="w-6/12 ">
                <Heading className='pr-64' headingText='Find The Best Fashion Style For You'/>
                <Para className='pr-44 mt-10' paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.' />
                <Headingbtn className='mt-16' buttonText='SHOP NOW'/>
            </div>
            <div className="w-6/12 flex justify-end">
                <Image src={BannerImg} alt={BannerImg}/>
            </div>
           
        </Flex>
       </Container>
    </div>
  )
}

export default Banner