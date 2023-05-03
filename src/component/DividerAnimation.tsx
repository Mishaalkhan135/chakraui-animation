import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DividerAnimation = ({ direction }: any) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const [isHovered, setIsHovered] = useState(false);
	const [lastY, setLastY] = useState(0);
	const { scrollY } = useViewportScroll();
	const controls = useAnimation();
	const [showCircle, setShowCircle] = useState(false);

	const handleHoverStart = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (inView) {
				const currentY = scrollY.get();
				const isScrollingUp = currentY < lastY;

				if (isHovered || (inView && !isScrollingUp)) {
					setShowCircle(true);
				} else if (!isHovered && !inView) {
					setShowCircle(false);
				}

				controls.start({
					scaleX: isHovered || (inView && !isScrollingUp) ? 1 : 0,
					scaleY: isHovered || (inView && !isScrollingUp) ? 1 : 0.5, // Modify scaleY to control line thickness
				});

				setLastY(currentY);
			}
		};

		const unsubscribeScrollY = scrollY.onChange(handleScroll);
		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY, inView, isHovered, controls, lastY]);

	return (
		<Box
			ref={ref}
			position='relative'
			h='2px'
			onMouseEnter={handleHoverStart}
			onMouseLeave={handleHoverEnd}
			mb={6}
		>
			<motion.div
				animate={controls}
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					backgroundColor: isHovered || inView ? "black" : "gray",
					originX: direction === "rightToLeft" ? "0%" : "100%",
				}}
				transition={{ duration: 0.9 }}
			/>

			{showCircle && (
				<Box
					position='absolute'
					top='50%'
					right={direction === "rightToLeft" ? "auto" : "0%"}
					left={direction === "leftToRight" ? "-2%" : "100%"}
					transform='translate(50%, -50%)'
					borderRadius='50%'
					w='16px'
					h='16px'
					backgroundColor='blue'
					boxShadow='0 0 20px 5px black'
				/>
			)}
		</Box>
	);
};

export default DividerAnimation;
