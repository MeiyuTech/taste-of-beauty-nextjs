import Image from "next/image";
import { getDishImage } from "@/lib/dish-images";
import "./dish-photo.css";

export default function DishPhoto({ name, className = "", sizes = "(max-width: 700px) 90vw, 42vw" }: { name: string; className?: string; sizes?: string }) {
  const photo = getDishImage(name);
  if (!photo) return null;
  return <div className={`dish-photo ${className}`}>
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} style={{ objectPosition: photo.position }} />
  </div>;
}
