import { Box, Container, Divider, HStack } from "@chakra-ui/react";
import React from "react";
import styles from "./Roadmap.module.css";
import { FaDotCircle } from "react-icons/fa";

const DividerAnimation = () => {
	return (
		<Box w={"100%"} cursor={"pointer"} className={styles.roadmap}>
			<Divider className={styles["roadmap-divider"]} />
		</Box>
	);
};

export default DividerAnimation;
