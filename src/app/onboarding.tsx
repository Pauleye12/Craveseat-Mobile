// import { Image } from "expo-image";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import OnboardingControls from "../../components/onboardingControls";
import SplashUi from "../../components/splashUi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnboardingContent = [
  {
    image: require("../../assets/images/onboarding1.png"),
    heading: "Crave Freely, Satisfy Seamlessly",
    text: "Unlock a world where desires know no bounds. Indulge your desires without restraint and let CraveSeat bring them to vivid reality.",
  },
  {
    image: require("../../assets/images/onboarding2.png"),
    heading: "Craving Made Simple",
    text: "Share your cravings with our vibrant community, and let the satisfiers work their magic. Every craving is an opportunity to connect, inspire, and indulge.",
  },

  {
    image: require("../../assets/images/onboarding3.png"),
    heading: "Satisfaction Delivered, Cravings Conquered",
    text: "Whether it's a birthday wishlist or a spontaneous craving, we've got you covered.",
  },
];

const Onboarding = () => {
  const { width, height } = useWindowDimensions();
  // translateY tracks the vertical position of the Multistep layer
  // Starts off-screen at `height` (hidden at the bottom)
  const translateY = useSharedValue(height);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const openMultistep = () => {
    "worklet";
    translateY.value = withSpring(0, { damping: 20, stiffness: 140 });
  };

  // Pan Gesture: Swipe Up
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      // Only track upwards swipe (negative translationY)
      if (event.translationY < 0) {
        translateY.value = height + event.translationY;
      }
    })
    .onEnd((event) => {
      // If swiped up past 100px or quick swipe upward
      if (event.translationY < -100 || event.velocityY < -500) {
        translateY.value = withSpring(0, { damping: 40, stiffness: 140 });
      } else {
        // Return down off-screen
        translateY.value = withSpring(height, { damping: 20 });
      }
    });

  // Animated styles for Welcome Hero (fades & slides slightly up)
  const welcomeAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateY.value, [0, height], [0, 1]);
    const shiftY = interpolate(translateY.value, [0, height], [-60, 0]);
    return {
      opacity,
      transform: [{ translateY: shiftY }],
    };
  });

  // Animated styles for the Multistep Sheet
  const multiStepAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  // Carousel scroll handler
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    if (
      index !== currentIndex &&
      index >= 0 &&
      index < OnboardingContent.length
    ) {
      setCurrentIndex(index);
    }
  };
  // Next Button / Carousel scroll
  const handleNext = () => {
    if (currentIndex < OnboardingContent.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleGetStarted();
    }
  };

  const handleGetStarted = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    router.replace("/(auth)");
  };
  return (
    <View className="flex-1 bg-primary relative justify-center items-center">
      <Image
        className="absolute top-0 left-0 bottom-0 right-0 "
        source={require("../../assets/images/bgPattern.png")}
      />
      <GestureDetector gesture={panGesture}>
        <Animated.View
          className="justify-center items-center"
          style={[StyleSheet.absoluteFill, welcomeAnimatedStyle]}
        >
          <View className="flex -mt-20 justify-center items-center flex-col gap-10">
            <View className="flex flex-col gap-20 w-full px-4">
              <View className="flex flex-col items-center justify-center   ">
                <Text className="text-white font-nosifer uppercase text-center text-[32px] leading-14 ">
                  Welcome
                </Text>
                <Text className="text-white font-nosifer uppercase text-center text-[32px] leading-14 ">
                  to
                </Text>
                <Text className="text-white font-nosifer uppercase text-center text-[32px] leading-14 ">
                  Craveseat
                </Text>
              </View>
            </View>

            <View className="items-center justify-center">
              <Image
                className="scale-80"
                source={require("../../assets/images/logo.png")}
              />
            </View>
          </View>
          {/* Swipe Up Button / Hint (Tap or Swipe) */}
          <TouchableOpacity
            onPress={openMultistep}
            style={{ bottom: insets.bottom + 10 }}
            className="absolute  w-full items-center justify-center flex gap-2 flex-col "
          >
            <Text className="text-white font-pacifico text-4xl leading-14 ">
              Crave On!
            </Text>
            <Image source={require("../../assets/icons/swipeUp.png")} />
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>

      {/* 3. LAYER 2: Multistep Onboarding Screen (Slides Up) */}
      <Animated.View
        style={[StyleSheet.absoluteFill, multiStepAnimatedStyle]}
        className="bg-bg-light"
      >
        <SafeAreaView
          style={{ flex: 1 }}
          className="bg-bg-light"
          edges={["top", "bottom"]}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
              data={OnboardingContent}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              bounces={false}
              onMomentumScrollEnd={handleScroll}
              renderItem={({ item, index }) => (
                <SplashUi
                  image={item.image}
                  heading={item.heading}
                  text={item.text}
                  totalSlides={OnboardingContent.length}
                  currentIndex={currentIndex}
                  width={width}
                />
              )}
            />
          </View>

          <OnboardingControls
            totalSlides={OnboardingContent.length}
            currentIndex={currentIndex}
            onNext={handleNext}
            onSkip={handleGetStarted}
          />
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};

export default Onboarding;
