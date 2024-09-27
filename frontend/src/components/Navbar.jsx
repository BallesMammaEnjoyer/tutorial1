import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { GiShirtButton } from "react-icons/gi";
import { FaRegPlusSquare } from "react-icons/fa";
import { HamburgerIcon } from '@chakra-ui/icons'





const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"full"} px={4} bg={useColorModeValue("#3A3A3A", "#3A3A3A")} style={{ fontFamily: 'Lora' }}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}

      >

        <HStack spacing={0} alignItems={"center"} paddingLeft={300}>
          <Text
            color={"white"}
            fontSize='5xl'
            fontWeight='extrabold'
            paddingBottom={2}
            paddingRight={2}
          >
            <Link to={"/"}>
              able
            </Link>

          </Text>
          <GiShirtButton color="#79CFFF" size={35} />


          <Text
            color={"white"}
            fontSize='3xl'
            fontWeight='extrabold'
            paddingLeft={30}
          >
            <Link to={"/"}>
              home
            </Link>
          </Text>
          <Text
            color={"white"}
            fontSize='3xl'
            fontWeight='extrabold'
            paddingLeft={5}
          >
            <Link to={"/dam"}>
              dam
            </Link>
          </Text>
          <Text
            color={"white"}
            fontSize='3xl'
            fontWeight='extrabold'
            paddingLeft={5}
          >
            <Link to={"/herr"}>
              herr
            </Link>
          </Text>
          <Text
            color={"white"}
            fontSize='3xl'
            fontWeight='extrabold'
            paddingLeft={5}
          >
            <Link to={"/barn"}>
              barn
            </Link>
          </Text>




        </HStack>



        <HStack spacing={2} alignItems={"center"} paddingRight={300} >

          

          
          <Menu>

            <MenuButton as={Button} color={"white"} rightIcon={<HamburgerIcon />} variant={'link'} fontSize={"xx-large"} >

            </MenuButton>
            <MenuList>
              <MenuItem as="a" href='/create'>
                <Button w={"full"} bg={"bg"} variant={'link'}>
                  <MenuItem>

                    Create
                  </MenuItem>
                </Button>
              </MenuItem>
              <MenuItem as="a" href='/login'>
                <Button w={"full"} bg={"bg"} variant={'link'}>
                  <MenuItem>

                    Login
                  </MenuItem>


                </Button>
              </MenuItem>
              <MenuItem as="a" href='/cart'>
                <Button w={"full"} bg={"bg"} variant={'link'}>



                </Button>
              </MenuItem>
              <MenuItem>
                <Button w={"full"} onClick={toggleColorMode}>
                  {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>

        </HStack>


      </Flex>

    </Container>


  )
}

export default Navbar