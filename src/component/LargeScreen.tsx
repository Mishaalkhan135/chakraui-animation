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
import VerticalAnimation from "./VerticalDivider";

const LargeScreen = () => {
	return (
		<Box>
			<Stack display={{ base: "none", md: "flex" }}>
				<HStack>
					<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
						<DividerAnimation
							direction='leftToRight'
							circleColor='orange'
							circleShadow='0 0 20px 5px orange'
						/>
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q1 2023
						</Heading>
						<UnorderedList>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Seed Toke Sale
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Hiring & Operations
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								MVP Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Partnership Agreements
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
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
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q2 2023
						</Heading>
						<UnorderedList>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Private Sale R1
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Platform Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Payment Integration
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Framework Tests
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Community Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Community Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Creators Collaborations
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
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
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							{" "}
							Q3 2023
						</Heading>
						<UnorderedList>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								AI Machine Learning System
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Private Sale R2
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Ads & Organic Marketing
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Referral Program Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
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
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q4 2023
						</Heading>
						<UnorderedList>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Cross-Platform Compatibility
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Product Pre-Launch Preparations
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Private Sale R3
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
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
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q1 2024
						</Heading>
						<UnorderedList>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Token Listings
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Product Pre-Launch Announcement
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Definition of Alpha
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								VOXE Event
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Public Sale/IDO
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }} ml={6}>
								Referral Program Execution
							</ListItem>
						</UnorderedList>
					</Box>
					<Box w={"calc(50% - 1px)"} h={"360px"}></Box>
				</HStack>
			</Stack>
		</Box>
	);
};

export default LargeScreen;
