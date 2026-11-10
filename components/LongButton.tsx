import { Text, TouchableOpacity } from "react-native";

const LongButton = ({ text, func }: { text: string; func: () => void }) => {
  return (
    <TouchableOpacity
      className="w-full bg-primary py-3 px-5 mt-6 rounded-lg text-center "
      onPress={func}
    >
      <Text className="text-white font-poppins-medium text-xl text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;
