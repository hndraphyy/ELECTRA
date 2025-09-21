import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-primary">
      <Image
        src="/assets/images/products/asus_laptop_image.webp"
        alt="laptop"
        fill
        className="object-fill"
      />
    </div>
  );
};

export default Banner;
