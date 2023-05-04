import {
	Box,
	HStack,
	Heading,
	Container,
	Stack,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import DividerAnimation from "./DividerAnimation";
import { useState, useEffect } from "react";
import VerticalAnimation from "./VerticalDivider";
import LargeScreen from "./LargeScreen";
import SmallScreen from "./SmallScreen";

const MainComponent = () => {
	const [scrollPercent, setScrollPercent] = useState(0);
	const direction = (index: any) => {
		return index % 2 === 0 ? "leftToRight" : "rightToLeft";
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const percentScrolled = scrollPosition / height;
			setScrollPercent(percentScrolled);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Box bgGradient='linear(to-r, #f9f9ff, #e8f0ff)'>
			<Container maxW={"8xl"}>
				<Heading
					textAlign={"center"}
					fontSize={{ base: "5xl", md: "7xl" }}
					fontWeight={500}
					fontFamily={"sans-serif"}
					py={16}
				>
					Roadmap
				</Heading>
				<LargeScreen />
				<SmallScreen />
			</Container>
		</Box>
	);
};

export default MainComponent;
