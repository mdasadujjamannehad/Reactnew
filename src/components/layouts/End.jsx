import Container from '../Container'
import Flex from '../Flex'
import Headings from '../Heading'
import Para from '../Para'
import Headingbtn from '../Headingbtn'
import Image from '../Image'
import End1 from '../../assets/End1.png'
import End2 from '../../assets/End2.png'
import Stars from '../../assets/Stars.png'

const End = () => {
  return (
    <div className=' bg-endingBg pt-9 pb-48' >
        <Container>
            <Flex>
                <div className="pt-9 w-[457px] ml-24">
                    <Headings className='font-frank text-7xl text-white font-bold' headingText='Best Seller Product'/>
                    <Para className='font-frank text-2xl text-white mt-11 font-bold' paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'/>
                    <Headingbtn className='font-semibold text-2xl text-white font-pop mt-10' buttonText='LEARN MORE' />
                </div>
                <div className="w-[366px] pt-9 ml-8">
                  <Image src={End1} alt={End1} />
                  <div className="w-[366px] bg-white pl-6 py-6">
                  <Image className='' src={Stars} alt={Stars} />
                  <Headings className='font-semibold text-[22px] text-black font-pop mt-3' headingText='Sweater Shirt' />
                  <Flex>
                  <Para className='text-dollerclr font-normal text-2xl font-pop pt-3' paraText='$45.99' />
                  <Para className='text-black font-normal text-2xl font-pop pt-3 ml-8' paraText='$35.99' />
                  </Flex>
                  </div>
                </div>
                <div className="w-[366px] pt-9 ml-8">
                <Image src={End2} alt={End2} />
                <div className="w-[366px] bg-white pl-6 py-6">
                  <Image className='' src={Stars} alt={Stars} />
                  <Headings className='font-semibold text-[22px] text-black font-pop mt-3' headingText='Pants fashion' />
                  <Flex>
                  <Para className='text-dollerclr font-normal text-2xl font-pop pt-3' paraText='$55' />
                  <Para className='text-black font-normal text-2xl font-pop pt-3 text-center ml-14' paraText='$44.99' />
                  </Flex>
                  </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default End