import { Box, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import {
  sectionHeadingSize,
  opacity,
  centerOnBigScreen,
  sectionHeadingSizeMobile,
} from "@/styles/presets";
import ProjectCard from "./projectcard";
import { projects } from "@/content/projects";
import SectionSeparator from "./sectionseparator";
import { motion } from "framer-motion";
const projectItems = projects.map((item, index) => {
  return <ProjectCard data={item} position={index} key={item.name} />;
});

export default function ProjectSection() {
  const [smallScreen] = useMediaQuery(`(max-width: 800px)`);
  return (
    <>
      <Box
        overflow="visible"
        padding="100px 0"
        position="relative"
        display="flex"
        flexDir="column"
      >
        <Box
          display="flex"
          flexDir="column"
          position="relative"
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Box
            position="absolute"
            width="80%"
            opacity={opacity}
            bottom="-15%"
            left="60%"
          >
            <Image alt="" src="/svg/Triangle3.svg" />
          </Box>

          <Box
            position="absolute"
            left={smallScreen ? "0" : "-20%"}
            top="30%"
            minW="800px"
            width="60%"
            zIndex="-1"
            opacity={opacity}
            transform="rotate(-45deg)"
          >
            <Box
              position="absolute"
              width="100%"
              transform="rotate(45deg)"
              top="-60%"
            >
              <Image alt="" src="/svg/Triangle2.svg" />
            </Box>
            <Image alt="" src="/svg/My.svg" />
            <Box width="200%">
              <Image alt="" src="/svg/Works.svg" />
            </Box>
          </Box>
          <Heading
            fontSize={
              smallScreen ? sectionHeadingSizeMobile : sectionHeadingSize
            }
          >
            Featured Projects
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="1fr"
            rowGap="4rem"
            padding="50px 0"
          >
            {projectItems}
          </Box>
          <Box
            alignSelf="center"
            position="relative"
            _after={{
              content: '""',
              width: "65%",
              position: "absolute",
              bg: "themeRed",
              height: "5px",
              alignSelf: "center",
              right: "0",
              bottom: "0",
            }}
            _before={{
              content: '""',
              width: "32%",
              position: "absolute",
              bg: "white",
              height: "5px",
              alignSelf: "center",
              left: "0",
              bottom: "0",
            }}
          >
            <Heading as="p" textAlign="center">
              Want to see more?
            </Heading>
          </Box>
          <Box
            as="a"
            href="https://github.com/choden-dev"
            target="_blank"
            cursor="pointer"
            paddingTop=".5rem"
            height="3rem"
            width="3rem"
            display="flex"
            alignSelf="center"
          >
            <Image alt="github icon" src="/svg/GitHub.svg" />
          </Box>
        </Box>
        <SectionSeparator nextSectionName="Contact" />
      </Box>
    </>
  );
}
