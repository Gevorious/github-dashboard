import Image from 'next/image';

const Avatar = ({ src, size = 40 }: { src: string; size?: number }) => {
  return (
    <span className="rounded-full overflow-hidden inline-block">
      <Image
        src={src}
        alt="User avatar"
        width={size}
        height={size}
        className="object-cover"
        priority
      />
    </span>
  );
};

export default Avatar;
