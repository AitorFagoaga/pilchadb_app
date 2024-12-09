import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search..." }: SearchBarProps) => {
  const [text, setText] = useState("");

  const handleChangeText = (value: string) => {
    setText(value);
    onSearch(value);
  };

  const handleClear = () => {
    setText("");
    onSearch("");
  };

  return (
    <View className="flex-row items-center mx-4 px-4 h-10 bg-[#1E1E1E] rounded-xl">
      <FontAwesome
        name="search"
        size={16}
        color="#666"
        style={{ marginRight: 8 }}
      />
      <TextInput
        value={text}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#666"
        className="flex-1 text-base text-white"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {text.length > 0 && (
        <Pressable
          onPress={handleClear}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <FontAwesome name="times-circle" size={16} color="#666" />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
