import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Headings from '../Headings'
import Para from '../Para'
import FashionPNG from '../../assets/Fashion.png'

const Fashion = () => {
    return (
        <div className='py-60'>
            <Container>
                <Flex>
                    <div className="w-6/12 z-10">
                        <Image  src={FashionPNG} alt={FashionPNG} />
                    </div>
                    <div className="w-6/12 pl-28 mt-20 ">
                        <Headings className='font-frank text-7xl font-bold' headingsText='Best Fashion Since 2010' />
                        <Para className='pr-44 mt-16' paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. ' />
                        <div >
                           <Flex className='w-[795px] py-20 bg-headerBg rounded-2xl mt-16 ml-[-260px] z-0'>
                            <div className="w-[265px] text-center">
                                   <Headings className='font-pod text-6xl font-semibold ' headingsText='2010' />
                                   <Para className='text-3xl mt-3 font-medium relative after:absolute after:h-36 after:w-1 after:bg-black after:rounded-3xl after:right-0 after:top-[-84px]' paraText='Founded' />
                            </div>
                            <div className="w-[265px] text-center">
                                   <Headings className='font-pod text-6xl font-semibold ' headingsText='5000+' />
                                   <Para className='text-3xl mt-3 font-medium relative after:absolute after:h-36 after:w-1 after:bg-black after:rounded-3xl after:right-0 after:top-[-84px]' paraText='Product Sold' />
                            </div>
                            <div className="w-[265px] text-center">
                                   <Headings className='font-pod text-6xl font-semibold ' headingsText='4500+' />
                                   <Para className='text-3xl mt-3 font-medium  ' paraText='Best Reviews' />
                            </div>
                           </Flex>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Fashion