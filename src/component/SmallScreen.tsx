import {
	Box,
	HStack,
	Heading,
	Stack,
	UnorderedList,
	ListItem,
	Flex,
} from "@chakra-ui/react";
import VerticalAnimation from "./VerticalDivider";

const LargeScreen = () => {
	return (
		<Stack display={{ base: "flex", md: "none" }}>
			<HStack>
				<Flex
					position='absolute'
					width='50px'
					height='300px'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					bg={"gray.100"}
				>
					<VerticalAnimation direction='up' height='260px' />
				</Flex>
				<Box w={"100%"} h={"260px"} pl={16}>
					<Heading fontSize={{ base: "3xl" }}>Q1 2023</Heading>
					<UnorderedList>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Seed Toke Sale
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Hiring & Operations
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							MVP Development
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Partnership Agreements
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Investor Marketing Campaign
						</ListItem>
					</UnorderedList>
				</Box>
			</HStack>
			<HStack>
				<Flex
					position='absolute'
					width='50px'
					height='300px'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					bg={"gray.100"}
				>
					<VerticalAnimation direction='up' height='310px' />
				</Flex>
				<Box w={"100%"} h={"300px"} pl={16}>
					<Heading fontSize={{ base: "3xl" }}>Q2 2023</Heading>
					<UnorderedList>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Private Sale R1
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Platform Development
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Payment Integration
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Framework Tests
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Community Development
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Community Development
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Creators Collaborations
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Social Media Campaign
						</ListItem>
					</UnorderedList>
				</Box>
			</HStack>
			<HStack>
				<Flex
					position='absolute'
					width='50px'
					height='300px'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					bg={"gray.100"}
				>
					<VerticalAnimation direction='up' height='260px' />
				</Flex>
				<Box w={"100%"} h={"260px"} pl={16}>
					<Heading fontSize={{ base: "3xl" }}>Q3 2023</Heading>
					<UnorderedList>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							AI Machine Learning System
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Private Sale R2
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Ads & Organic Marketing
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Referral Program Development
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							PR Activities
						</ListItem>
					</UnorderedList>
				</Box>
			</HStack>
			<HStack>
				<Flex
					position='absolute'
					width='50px'
					height='300px'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					bg={"gray.100"}
				>
					<VerticalAnimation direction='up' height='260px' />
				</Flex>

				<Box w={"100%"} h={"260px"} pl={16}>
					<Heading fontSize={{ base: "3xl" }}>Q4 2023</Heading>
					<UnorderedList>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Cross-Platform Compatibility
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Product Pre-Launch Preparations
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Private Sale R3
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Influencer Marketing Campaign
						</ListItem>
					</UnorderedList>
				</Box>
			</HStack>
			<HStack>
				<Flex
					position='absolute'
					width='50px'
					height='300px'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					bg={"gray.100"}
				>
					<VerticalAnimation
						direction='up'
						height='260px'
						showEndCircleOn={true}
					/>
				</Flex>
				<Box w={"100%"} h={"260px"} pl={16}>
					<Heading fontSize={{ base: "3xl" }}>Q1 2024</Heading>
					<UnorderedList>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Token Listings
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Product Pre-Launch Announcement
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Definition of Alpha
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							VOXE Event
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Public Sale/IDO
						</ListItem>
						<ListItem
							fontSize={{ sm: "xl", mm: "xl", xl: "2xl" }}
							ml={6}
						>
							Referral Program Execution
						</ListItem>
					</UnorderedList>
				</Box>
			</HStack>
		</Stack>
	);
};

export default LargeScreen;
