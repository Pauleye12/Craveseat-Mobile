import { Text, View } from "react-native";

const SectionCard = ({
  icon,
  text,
  classname,
}: {
  icon: any;
  text: string;
  classname?: string;
}) => {
  return (
    <View
      className={`rounded-lg flex justify-center items-center flex-col ${classname}`}
    >
      {/* <Image source={icon} className="h-10.5 w-10.5 mb-3" /> */}
      <Text className="font-poppins-medium text-black text-sm">{text}</Text>
    </View>
  );
};

export default SectionCard;
