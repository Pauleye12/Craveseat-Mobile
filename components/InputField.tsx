import { Image, TextInput, View } from "react-native";

const InputField = ({
  image,
  placeholder,
}: {
  image: any;
  placeholder: string;
}) => {
  return (
    <View className="flex-row items-center border border-primary rounded-xl px-4 h-13 w-full gap-3 bg-white">
      <Image className="w-5.5 h-5.5" resizeMode="contain" source={image} />
      <TextInput
        className="flex-1 py-0 text-sm font-poppins text-black"
        style={{ includeFontPadding: false }}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
};

export default InputField;
