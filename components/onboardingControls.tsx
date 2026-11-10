import { Text, TouchableOpacity, View } from "react-native";

const OnboardingControls = ({
  totalSlides,
  currentIndex,
  onSkip,
  onNext,
}: {
  totalSlides: number;
  currentIndex: number;
  onSkip: () => void;
  onNext: () => void;
}) => {
  return (
    <View className="w-full flex items-center justify-center ">
      {currentIndex + 1 === totalSlides ? (
        <TouchableOpacity
          onPress={onNext}
          className="w-full max-w-[80%] py-3 bg-primary rounded-2xl text-center flex justify-center items-center "
        >
          <Text className="text-white text-center font-poppins-semibold text-xl  ">
            Get Started
          </Text>
        </TouchableOpacity>
      ) : (
        <View className="flex flex-row w-full justify-between items-center px-10 py-7 ">
          <TouchableOpacity onPress={onSkip} className="">
            <Text className="text-[#50555C] font-poppins ">Skip</Text>
          </TouchableOpacity>
          {/* Pagination */}
          <View className="flex flex-row items-center gap-3 justify-between">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <View
                key={index}
                className={`h-1.5 rounded-b-full transition-all duration-500 w-1.5 ${index === currentIndex ? "bg-primary" : "bg-slate-300"} `}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={onNext}
            className="bg-primary text-white font-poppins px-4 py-2 rounded-lg  "
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default OnboardingControls;
