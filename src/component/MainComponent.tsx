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
					fontSize={"7xl"}
					fontWeight={500}
					fontFamily={"sans-serif"}
					py={16}
				>
					Roadmap
				</Heading>
				<Stack>
					<HStack>
						<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
							<DividerAnimation
								direction='leftToRight'
								circleColor='orange'
								circleShadow='0 0 20px 5px orange'
							/>
							<Heading fontSize={"5xl"}>Q1 2023</Heading>
							<UnorderedList>
								<ListItem fontSize={"2xl"} ml={6}>
									Seed Toke Sale
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Hiring & Operations
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									MVP Development
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Partnership Agreements
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Investor Marketing Campaign
								</ListItem>
							</UnorderedList>
						</Box>
						<Box w={"calc(16 - 2px)"} bg={"gray.300"}>
							<VerticalAnimation direction='up' height='360px' />
						</Box>
						<Box w={"calc(50% - 1px)"} h={"360px"}></Box>
					</HStack>
					<HStack>
						<Box w={"calc(50% - 1px)"} h={"500px"}></Box>
						<Box w={"calc(16 -2px)"} bg={"gray.300"}>
							<VerticalAnimation direction='up' height='500px' />
						</Box>

						<Box w={"calc(50% - 1px)"} h={"500px"} p={16} pt={-8}>
							<DividerAnimation
								direction='rightToLeft'
								circleColor='purple'
								circleShadow='0 0 20px 5px purple'
							/>
							<Heading fontSize={"5xl"}>Q2 2023</Heading>
							<UnorderedList>
								<ListItem fontSize={"2xl"} ml={6}>
									Private Sale R1
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Platform Development
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Payment Integration
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Framework Tests
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Community Development
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Community Development
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Creators Collaborations
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Social Media Campaign
								</ListItem>
							</UnorderedList>
						</Box>
					</HStack>
					<HStack>
						<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
							<DividerAnimation
								direction='leftToRight'
								circleColor='blue'
								circleShadow='0 0 20px 5px blue'
							/>
							<Heading fontSize={"5xl"}> Q3 2023</Heading>
							<UnorderedList>
								<ListItem fontSize={"2xl"} ml={6}>
									AI Machine Learning System
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Private Sale R2
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Ads & Organic Marketing
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Referral Program Development
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									PR Activities
								</ListItem>
							</UnorderedList>
						</Box>
						<Box w={"calc(16 -2px)"} bg={"gray.300"}>
							<VerticalAnimation direction='up' height='360px' />
						</Box>

						<Box w={"calc(50% - 1px)"} h={"360px"}></Box>
					</HStack>
					<HStack>
						<Box w={"calc(50% - 1px)"} h={"300px"}></Box>
						<Box w={"calc(16 -2px)"} bg={"gray.300"}>
							<VerticalAnimation
								direction='up'
								height='360px'
								showEndCircleOn={true}
							/>
						</Box>

						<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
							<DividerAnimation
								direction='rightToLeft'
								circleColor='pink'
								circleShadow='0 0 20px 5px pink'
							/>
							<Heading fontSize={"5xl"}>Q4 2023</Heading>
							<UnorderedList>
								<ListItem fontSize={"2xl"} ml={6}>
									Cross-Platform Compatibility
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Product Pre-Launch Preparations
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Private Sale R3
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Influencer Marketing Campaign
								</ListItem>
							</UnorderedList>
						</Box>
					</HStack>

					<HStack>
						<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
							<DividerAnimation
								direction='leftToRight'
								circleColor='green'
								circleShadow='0 0 20px 5px green'
							/>
							<Heading fontSize={"5xl"}>Q1 2024</Heading>
							<UnorderedList>
								<ListItem fontSize={"2xl"} ml={6}>
									Token Listings
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Product Pre-Launch Announcement
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Definition of Alpha
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									VOXE Event
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Public Sale/IDO
								</ListItem>
								<ListItem fontSize={"2xl"} ml={6}>
									Referral Program Execution
								</ListItem>
							</UnorderedList>
						</Box>
						<Box w={"calc(50% - 1px)"} h={"360px"}></Box>
					</HStack>
				</Stack>
			</Container>
		</Box>
	);
};

export default MainComponent;
