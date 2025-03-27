import NextImage from 'next/image'
import { FC } from 'react'

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImageSrc: string;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const ImageModal: FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  currentImageSrc, 
  onNext, 
  onPrevious,
  hasNext,
  hasPrevious
}) => {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && hasNext) onNext();
    if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-[80%] h-[80%]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl p-2"
        >
          ✕
        </button>

        {/* Previous button */}
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl p-4 hover:text-gray-300 transition-colors"
          >
            ←
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl p-4 hover:text-gray-300 transition-colors"
          >
            →
          </button>
        )}

        <NextImage
          src={currentImageSrc}
          alt="Enlarged view"
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal; 