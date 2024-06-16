import getCurrentUser from '../actions/getCurrentUser';
import { getFavoriteListings } from '../actions/getFavoriteListings';
import EmptyState from '../components/EmptyState';
import FavoritesClient from '../components/FavoritesClient';

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const favoriteListings = await getFavoriteListings();

  if (favoriteListings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorites listing..."
      />
    );
  }

  return (
    <FavoritesClient listings={favoriteListings} currentUser={currentUser} />
  );
};

export default FavoritesPage;
