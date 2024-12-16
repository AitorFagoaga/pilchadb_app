import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useBookMarkStore from "../store/useBookMarkStore";

interface BookmarkButtonProps {
  cardId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ cardId }) => {
  const { bookmarks, toggleBookmark } = useBookMarkStore();

  const isBookmarked = bookmarks.includes(cardId);

  return (
    <Pressable onPress={() => toggleBookmark(cardId)}>
      {isBookmarked ? (
        <Ionicons name="bookmark" size={18} color="gold" />
      ) : (
        <Ionicons name="bookmark-outline" size={18} color="white" />
      )}
    </Pressable>
  );
};

export default BookmarkButton;
