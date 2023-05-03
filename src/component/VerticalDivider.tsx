import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const VerticalAnimation = ({ direction, height, showEndCircleOn }: any) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const [isHovered, setIsHovered] = useState(false);
	const [lastY, setLastY] = useState(0);
	const { scrollY } = useViewportScroll();
	const controls = useAnimation();
	const [showStartCircle, setShowStartCircle] = useState(false);
	const [showEndCircle, setShowEndCircle] = useState(
		showEndCircleOn || false
	);

	const [hasScrolled, setHasScrolled] = useState(false);

	const handleHoverStart = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(true);
			if (inView) {
				const currentY = scrollY.get();
				const isScrollingUp = currentY < lastY;

				if (isHovered || (inView && !isScrollingUp)) {
					setShowStartCircle(true);

					if (showEndCircleOn) {
						setShowEndCircle(true);
					}
				} else if (!isHovered && !inView) {
					setShowStartCircle(false);
					setShowEndCircle(false);
				}

				controls.start({
					scaleY: isHovered || (inView && !isScrollingUp) ? 1 : 0,
				});

				setLastY(currentY);
			}
		};

		const unsubscribeScrollY = scrollY.onChange(handleScroll);
		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY, inView, isHovered, controls, lastY, showEndCircleOn]);

	const startCircleY = showStartCircle ? "0%" : "100%";

	const endCircleY = showEndCircleOn ? "100%" : showEndCircle ? "100%" : "0%";
	return (
		<Box
			ref={ref}
			position='relative'
			w='2px'
			h={height}
			margin='auto'
			visibility={hasScrolled ? "visible" : "hidden"}
			onMouseEnter={handleHoverStart}
			onMouseLeave={handleHoverEnd}
		>
			{hasScrolled && (
				<motion.div
					animate={controls}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						backgroundColor: isHovered || inView ? "black" : "gray",
						originY: direction === "down" ? "100%" : "0%",
					}}
					transition={{ duration: 0.9 }}
				/>
			)}
			{showStartCircle && (
				<Box
					position='absolute'
					top={startCircleY}
					left='50%'
					transform='translate(-50%, -50%)'
					borderRadius='50%'
					w='18px'
					h='18px'
					backgroundColor='black'
					boxShadow='0 0 20px 5px black'
				/>
			)}
			{showEndCircle && (
				<Box
					position='absolute'
					top={endCircleY}
					left='50%'
					transform='translate(-50%, -50%)'
					borderRadius='50%'
					w='18px'
					h='18px'
					backgroundColor='black'
					boxShadow='0 0 20px 5px black'
				/>
			)}
		</Box>
	);
};

export default VerticalAnimation;
