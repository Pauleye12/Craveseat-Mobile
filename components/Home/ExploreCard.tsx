import { Image, Text, TouchableOpacity, View } from "react-native";

const ExploreCard = ({
  image,
  name,
  price,
  url,
}: {
  image: any;
  name: string;
  price: number;
  url: string;
}) => {
  return (
    <View className="w-75 rounded-lg flex flex-col bg-[#f1f1f1] ">
      <View className="bg-white rounded-t-lg ">
        <Image
          className="rounded-t-lg w-75 h-30  "
          resizeMode="cover"
          source={image}
        />
      </View>
      <View className="flex flex-row justify-between items-center px-4 pt-3.5 pb-2.5 ">
        <View className="flex flex-col gap-1">
          <Text className="font-poppins-medium">{name}</Text>
          <Text className="font-poppins text-[#9e9e9e] text-sm">
            NGN {price}
          </Text>
          <View className="flex flex-row items-center">
            <TouchableOpacity className="border-[0.5px] border-[#50555c] p-1">
              <Text className="text-[#50555c] text-xs font-poppins-medium">
                Add to wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="bg-primary px-2.5 py-1">
          <Text className="text-white uppercase font-bold text-sm ">Crave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExploreCard;
