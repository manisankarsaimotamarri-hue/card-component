import { useState } from 'react';
import { Heart, Eye, X, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
}

const Card = ({ id, title, image, description, details }: CardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);
  const [dislikeCount, setDislikeCount] = useState(Math.floor(Math.random() * 20) + 5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    if (isDisliked) {
      setDislikeCount(prev => prev - 1);
      setIsDisliked(false);
    }
    
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    }
    
    if (isDisliked) {
      setDislikeCount(prev => prev - 1);
    } else {
      setDislikeCount(prev => prev + 1);
    }
    setIsDisliked(!isDisliked);
  };

  const totalReactions = likeCount - dislikeCount;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card */}
      <div className="group relative bg-gradient-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* View Details Button Overlay */}
          <Button
            onClick={openModal}
            variant="secondary"
            size="sm"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/90 backdrop-blur-sm hover:bg-white"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Reaction Summary */}
          <div className="text-center mb-4">
            <span className={`text-sm font-medium ${
              totalReactions > 0 ? 'text-green-600' : totalReactions < 0 ? 'text-red-500' : 'text-muted-foreground'
            }`}>
              Total Reactions: {totalReactions > 0 ? '+' : ''}{totalReactions}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <Button
                onClick={handleLike}
                variant={isLiked ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  isLiked 
                    ? 'bg-gradient-primary text-primary-foreground animate-like-bounce shadow-elegant' 
                    : 'hover:bg-primary/5 hover:border-primary hover:text-primary'
                }`}
              >
                <Heart
                  className={`w-4 h-4 mr-1 transition-all duration-300 ${
                    isLiked ? 'fill-current scale-110' : 'scale-100'
                  }`}
                />
                {likeCount}
              </Button>

              <Button
                onClick={handleDislike}
                variant={isDisliked ? "destructive" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  isDisliked 
                    ? 'animate-like-bounce shadow-elegant' 
                    : 'hover:bg-destructive/5 hover:border-destructive hover:text-destructive'
                }`}
              >
                <ThumbsDown
                  className={`w-4 h-4 mr-1 transition-all duration-300 ${
                    isDisliked ? 'fill-current scale-110' : 'scale-100'
                  }`}
                />
                {dislikeCount}
              </Button>
            </div>

            <Button
              onClick={openModal}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-scale-in">
          <div className="bg-card rounded-2xl shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
              />
              <Button
                onClick={closeModal}
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {details}
              </p>

              {/* Reaction Summary in Modal */}
              <div className="text-center mb-4">
                <span className={`text-lg font-semibold ${
                  totalReactions > 0 ? 'text-green-600' : totalReactions < 0 ? 'text-red-500' : 'text-muted-foreground'
                }`}>
                  Total Reactions: {totalReactions > 0 ? '+' : ''}{totalReactions}
                </span>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Button
                    onClick={handleLike}
                    variant={isLiked ? "default" : "outline"}
                    className={`transition-all duration-300 ${
                      isLiked 
                        ? 'bg-gradient-primary text-primary-foreground shadow-elegant' 
                        : 'hover:bg-primary/5 hover:border-primary hover:text-primary'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        isLiked ? 'fill-current' : ''
                      }`}
                    />
                    Like ({likeCount})
                  </Button>

                  <Button
                    onClick={handleDislike}
                    variant={isDisliked ? "destructive" : "outline"}
                    className={`transition-all duration-300 ${
                      isDisliked 
                        ? 'shadow-elegant' 
                        : 'hover:bg-destructive/5 hover:border-destructive hover:text-destructive'
                    }`}
                  >
                    <ThumbsDown
                      className={`w-4 h-4 mr-2 ${
                        isDisliked ? 'fill-current' : ''
                      }`}
                    />
                    Dislike ({dislikeCount})
                  </Button>
                </div>

                <Button
                  onClick={closeModal}
                  variant="secondary"
                  className="hover:bg-secondary/80"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;