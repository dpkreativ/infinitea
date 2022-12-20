import Image from 'next/image';
import { useEffect } from 'react';

export default function Card({
  creditUrl,
  imgAlt = 'placeholder',
  imgSrc = '/placeholder.jpg',
  shotBy,
  newLimit,
  isLast,
}) {
  /**
   * Select the Card component with useRef
   */
  const cardRef = useRef();

  /**
   * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
   */
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <div className="shadow-lg rounded-xl p-2 w-full bg-white" ref={cardRef}>
      <div className="w-full h-96 relative overflow-hidden rounded-xl">
        <Image
          src={imgSrc}
          fill
          sizes=""
          style={{ objectFit: 'cover' }}
          alt={imgAlt}
          lazy="true"
        />
      </div>
      <div className="rounded-b-xl p-4">
        <a href={creditUrl}>
          Credit:<span> {shotBy}</span>
        </a>
      </div>
    </div>
  );
}
