import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as Haptics from "expo-haptics";

type Props = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function TabBarButton({ children, ...props }: Props) {
  return (
    <TouchableOpacity
      {...props}
      onPress={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        props.onPress?.(e);
      }}
      className="flex-1 items-center justify-center"
    >
      {children}
    </TouchableOpacity>
  );
}
