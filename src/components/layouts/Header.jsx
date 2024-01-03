import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import Button from '../Button'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
  <nav className='bg-headerBg'>
   <Container>
    <Flex>
    <div className="w-[10%] py-[55px]">
        <Image src={Logo} alt={Logo}/>
    </div>
    <div className="w-[70%] py-[66px]">
       <ul>
        <Flex className="justify-center gap-14">
          <List menuName='Man'/>
          <List menuName='Woman'/>
          <List menuName='Kids'/>
          <List menuName='Collection'/>
          <List menuName='Trends'/>
        </Flex>
       </ul>
    </div>
    <div className="w-[20%] gap-5 py-[55px]">
   <Flex className='gap-2.5'>
   <Button buttonText='Login'/>
    <Button buttonText='Sign Up'/>
   </Flex>
    </div>
    </Flex>
   </Container>
  </nav>
  )
}

export default Header