import { Box, Image } from '@chakra-ui/react'
import { opacity } from '@/styles/presets'

type Props = {}

export default function BensonCho({ }: Props) {
    return (
        <Box
            pointerEvents="none"
            width='100vw'
            position="absolute"
            zIndex="-1"
            top="-10rem"
            height="calc(100vh + 10rem)"

            overflow="hidden"
        >
            <Box
                transform="translateX(-10%)"
                zIndex="-1"

                width="140%"
                minW="1600px"
            >
                <Image src="/svg/Benson.svg"
                    opacity={opacity}
                    minW="100%"
                    transform="rotate(-30deg)" />
            </Box>
            <Box
                position="absolute"
                width="80%"

                left="25%"
                minW="900px"
            >
                <Image
                    opacity={opacity}
                    src="/svg/Cho.svg"
                    minW="100%"
                    transform="rotate(-30deg)" />
            </Box>
        </Box >
    )
}