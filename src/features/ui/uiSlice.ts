import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  mobileMenuOpen: boolean
  cartCount: number
  wishlistCount: number
}

// Matches the Figma design's initial state: cart = 1, wishlist = 1.
const initialState: UiState = {
  mobileMenuOpen: false,
  cartCount: 1,
  wishlistCount: 1,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false
    },
    incrementCart(state, action: PayloadAction<number | undefined>) {
      state.cartCount += action.payload ?? 1
    },
    toggleWishlistItem(state) {
      // Simple demo toggle: adds/removes one wishlist item.
      state.wishlistCount =
        state.wishlistCount > 0 ? state.wishlistCount - 1 : state.wishlistCount + 1
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, incrementCart, toggleWishlistItem } =
  uiSlice.actions
export default uiSlice.reducer
