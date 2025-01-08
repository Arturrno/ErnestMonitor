import Image from "next/image";
import styles from "./page.module.css";

export default function Button({ title, link }: { title: string, link: string }) {
  return (
    <a
      className={styles.primary}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={styles.logo}
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      {title}
    </a>

  );
}
