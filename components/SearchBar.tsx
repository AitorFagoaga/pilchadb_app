import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <View className="flex-row items-center bg-[#1E1E1E] mx-4 rounded-lg px-4 h-10">
      <FontAwesome name="search" size={16} color="#666" />
      <TextInput
        className="flex-1 ml-2 text-white"
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <FontAwesome name="times-circle" size={16} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
