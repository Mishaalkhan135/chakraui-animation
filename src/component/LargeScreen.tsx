import {
	Box,
	HStack,
	Heading,
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
							circleShadow='0 0 30px 5px orange'
						/>
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q1 2023
						</Heading>
						<UnorderedList>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Seed Toke Sale
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Hiring & Operations
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								MVP Development
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Partnership Agreements
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
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
							circleShadow='0 0 30px 5px purple'
						/>
						<Heading
							ml={{ lg: "10%", xl: "30%" }}
							fontSize={{ md: "3xl", lg: "5xl" }}
						>
							Q2 2023
						</Heading>
						<UnorderedList ml={{ md: "16%", lg: "25%", xl: "40%" }}>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Private Sale R1
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Platform Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Payment Integration
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Framework Tests
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Community Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Community Development
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
								Creators Collaborations
							</ListItem>
							<ListItem fontSize={{ md: "xl", lg: "2xl" }}>
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
							circleShadow='0 0 30px 5px blue'
						/>
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q3 2023
						</Heading>
						<UnorderedList>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								AI Machine Learning System
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Private Sale R2
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Ads & Organic Marketing
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Referral Program Development
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
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
							circleShadow='0 0 30px 5px pink'
						/>
						<Heading
							ml={{ lg: "10%", xl: "25%" }}
							fontSize={{ md: "3xl", lg: "5xl" }}
						>
							Q4 2023
						</Heading>
						<UnorderedList ml={{ lg: "13%", xl: "30%" }}>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Cross-Platform Compatibility
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Product Pre-Launch Preparations
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Private Sale R3
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Influencer Marketing Campaign
							</ListItem>
						</UnorderedList>
					</Box>
				</HStack>

				<HStack>
					<Box w={"calc(50% - 1px)"} h={"360px"} p={16} pt={-8}>
						<Box mt={-2}>
							<DividerAnimation
								direction='leftToRight'
								circleColor='green'
								circleShadow='0 0 30px 5px green'
							/>
						</Box>
						<Heading fontSize={{ md: "3xl", lg: "5xl" }}>
							Q1 2024
						</Heading>
						<UnorderedList>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Token Listings
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Product Pre-Launch Announcement
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Definition of Alpha
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								VOXE Event
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
								Public Sale/IDO
							</ListItem>
							<ListItem
								fontSize={{ md: "xl", lg: "2xl" }}
								ml={{ md: 6, lg: 10 }}
							>
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
