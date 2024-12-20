import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useBookMarkStore from "../store/useBookMarkStore";
import { useAuthStore } from "@/store/useAuthStore";
import { favoriteCreation, deleteFavorite } from "@/service/favoriteService";
import { Alert } from "react-native";

interface BookmarkButtonProps {
  cardId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ cardId }) => {
  const { bookmarks, toggleBookmark } = useBookMarkStore();
  const { token, id } = useAuthStore((state) => state); 

  const isBookmarked = bookmarks.includes(cardId);

  const handleToggleBookmark = async () => {
    try {
      if (isBookmarked) {
        const response = await deleteFavorite({ userId: Number(id), brandId: cardId }, token!);
        console.log("Eliminado de favoritos:", response);
      } else {
        const response = await favoriteCreation({ userId: Number(id), brandId: cardId }, token!);
        console.log("Agregado a favoritos:", response);
      }

      toggleBookmark(cardId); 
    } catch (error) {
      console.error("Error al intentar modificar el favorito:", error);
    }
  };

  return (
    <Pressable onPress={handleToggleBookmark}>
      {isBookmarked ? (
        <Ionicons name="bookmark" size={18} color="gold" />
      ) : (
        <Ionicons name="bookmark-outline" size={18} color="white" />
      )}
    </Pressable>
  );
};

export default BookmarkButton;
