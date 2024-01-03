import React from 'react'
import Headings from '../Headings'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Sweats from '../../assets/Sweats.png'
import Sweats2 from '../../assets/Sweats2.png'
import Sweats3 from '../../assets/Sweats3.png'

const Collection = () => {
  return (
    <div className='bg-white pt-40'>
        <Container>
            <Headings className='text-center mb-24 font-frank text-7xl font-bold' headingsText='New Collection'/>
            <Flex className='flex justify-between'>
                <div className="w-[426px] mr-20">
                    <Image src={Sweats} alt={Sweats}/>
                </div>
                <div className="w-[426px] mr-20">
                <Image src={Sweats2} alt={Sweats2}/>
                </div>
                <div className="w-[426px]">
                <Image src={Sweats3} alt={Sweats3}/>
                </div>
            </Flex>
        </Container>

    </div>
  )
}

export default Collection