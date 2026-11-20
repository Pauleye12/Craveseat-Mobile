import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CraversCard = ({
  pfImg,
  userName,
  img,
  title,
  price,
  date,
  url,
  friends,
}: {
  pfImg: any;
  userName: string;
  img: any;
  title: string;
  price: number;
  date: string;
  url: string;
  friends: boolean;
}) => {
  return (
    <View>
      <View className="flex-row gap-1 items-center">
        <Image source={pfImg} className="w-9 h-9 rounded-full " />
        <Text>{userName}</Text>
        <View className="bg-black rounded-full w-1 h-1" />
        {friends ? (
          <Text className="text-[#9E9E9E] font-poppins text-xs ">Friends</Text>
        ) : (
          <TouchableOpacity>
            <Text className="text-primary text-xs font-poppins">Add</Text>
          </TouchableOpacity>
        )}
      </View>
      <Link className="mt-4 rounded-xl " href={"/"}>
        <Image className="rounded-xl" source={img} />
      </Link>
      <View className="flex-row justify-between mt-2.5 items-start">
        <View className="flex flex-col gap-1">
          <Text className="font-poppins-medium">{title}</Text>
          <View className="flex-row gap-2 items-center ">
            <Text className="font-poppins text-[#9e9e9e] text-sm">
              NGN {price}
            </Text>
            <View className="bg-black rounded-full w-1 h-1" />
            <Text className="text-[#9E9E9E] text-xs font-poppins font-light">
              {date}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <TouchableOpacity className="border-[0.5px] border-[#50555c] p-1">
              <Text className="text-[#50555c] text-xs font-poppins-medium">
                Add to wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="bg-primary px-2 py-1.5">
          <Text className="text-white font-poppins-semibold text-sm">
            SATISFY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CraversCard;
