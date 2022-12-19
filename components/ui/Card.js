import Image from 'next/image';

export default function Card({
  creditUrl,
  imgAlt = 'placeholder',
  imgSrc = '/placeholder.jpg',
  shotBy,
}) {
  return (
    <div className="shadow-lg rounded-xl p-2 w-full bg-white">
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
