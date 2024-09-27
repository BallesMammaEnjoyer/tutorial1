import {VStack, Text, SimpleGrid, Box, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom"


const TypeSelect = () => {
    const mx = 300;

    return (
    <VStack spacing={8}>


        <SimpleGrid columns={4} spacing={10} w={"full"}>
            <Box
                shadow='lg'
                overflow='hidden'
                transition='all 0.3s'
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                style={{ fontFamily: 'Lora' }}
                position={"relative"}>
                <Image src='https://image.hm.com/assets/hm/ce/53/ce53a6ef590fdf566a6a53762e97a2a09defbcaa.jpg?imwidth=396' alt='REA' h={mx} w='full' objectFit='cover' />

                <Box p={2} position={"absolute"} bottom={3} right={3} left={3} bgGradient='linear(to-r, #3A3A3A, #3A3A3A, #3A3A3A, #0000)' color={"white"} paddingLeft={3} paddingRight={3}>
                    <Text fontSize='3xl'>REA</Text>
                </Box>
            </Box>
            <Box
                shadow='lg'
                overflow='hidden'
                transition='all 0.3s'
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                style={{ fontFamily: 'Lora' }}
                position={"relative"}>
                <Image src='https://image.hm.com/assets/hm/2f/d1/2fd161a50d8b9a1be205985943b1c3a832e551c5.jpg?imwidth=396' alt='NYHETER' h={mx} w='full' objectFit='cover' />

                <Box p={2} position={"absolute"} bottom={3} right={3} left={3} bgGradient='linear(to-r, #3A3A3A, #3A3A3A, #3A3A3A, #0000)' color={"white"} paddingLeft={3} paddingRight={3}>
                    <Text fontSize='3xl'>NYHETER</Text>
                </Box>
            </Box>
            <Link to={`/${id}/skor`}>
                <Box
                    shadow='lg'
                    overflow='hidden'
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                    style={{ fontFamily: 'Lora' }}
                    position={"relative"}
                >
                    <Image src='https://image.hm.com/assets/hm/37/5f/375f97384a6e47d5f34b50e41ca185457a6b1fa2.jpg?imwidth=396' alt='SKOR' h={mx} w='full' objectFit='cover' />

                    <Box p={2} position={"absolute"} bottom={3} right={3} left={3}
                        bgGradient='linear(to-r, #3A3A3A, #3A3A3A, #3A3A3A, #0000)' color={"white"} paddingLeft={3} paddingRight={3} >
                        <Text fontSize='3xl'>SKOR</Text>
                    </Box>
                </Box>
            </Link>
            <Link to={`/${id}/skor`}>
                <Box
                    shadow='lg'
                    overflow='hidden'
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                    style={{ fontFamily: 'Lora' }}
                    position={"relative"}>
                    <Image src='https://image.hm.com/assets/hm/3c/90/3c9054f89d4e49fdbd06f888a5cac0e39493360f.jpg?imwidth=396' alt='ACESGJORAR' h={mx} w='full' objectFit='cover' />

                    <Box p={2} position={"absolute"} bottom={3} right={3} left={3} bgGradient='linear(to-r, #3A3A3A, #3A3A3A, #3A3A3A, #0000)' color={"white"} paddingLeft={3} paddingRight={3}>
                        <Text fontSize='3xl'>ACCESSOARER</Text>
                    </Box>
                </Box>
            </Link>


        </SimpleGrid>

    </VStack>

)}

export default TypeSelect