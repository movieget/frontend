export const formatLikes = (likes: number): string => {
  if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + 'k'
  }
  return likes.toString()
}
