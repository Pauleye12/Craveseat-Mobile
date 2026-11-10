import { Image, Text, View } from "react-native";

const SplashUi = ({
  image,
  heading,
  text,
  totalSlides,
  currentIndex,
  width,
}: {
  image: any;
  heading: string;
  text: string;
  totalSlides: number;
  currentIndex: number;
  width: number;
}) => {
  return (
    <View
      className="bg-bg-light w-full px-10 flex-1 justify-center items-center  "
      style={{ width: width }}
    >
      <View className="flex justify-center items-center flex-col gap-18 ">
        <Image
          className=""
          style={{ width: 250, height: 250 }}
          source={image}
          resizeMode="contain"
        />

        <View className="flex flex-col gap-2.5 justify-center items-center  ">
          <Text className="font-poppins-semibold text-center text-xl ">
            {heading}
          </Text>
          <Text className="font-poppins text-center text-sm ">{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashUi;
