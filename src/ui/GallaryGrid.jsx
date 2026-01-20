// src/ui/GalleryGrid.jsx
import PropTypes from 'prop-types';
import GalleryCard from './GalleryCard';

export default function GalleryGrid({ items, onItemClick }) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
      gap-3 md:gap-4 lg:gap-5  pb-16
    ">
      {items.map((src, index) => (
        <GalleryCard
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          onClick={() => onItemClick?.(src, index)}
        />
      ))}
    </div>
  );
}

GalleryGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func,
};
