import { create } from "zustand";

type BookMarkState = {
  bookmarks: number[];
  toggleBookmark: (cardId: number) => void;
};

const useBookMarkStore = create<BookMarkState>((set) => ({
  bookmarks: [],
  toggleBookmark: (cardId) =>
    set((state) => ({
      bookmarks: state.bookmarks.includes(cardId)
        ? state.bookmarks.filter((id) => id !== cardId)
        : [...state.bookmarks, cardId],
    })),
}));

export default useBookMarkStore;
