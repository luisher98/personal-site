import styles from "./styles/HeroHeading.module.scss";
export default function HeroHeading() {
  return (
    <>
      <h2 className="md:text-4xl font-semibold drop-shadow-xl">Front-End Developer</h2>
      <div className={`w-full h-full ${styles.title__layer}`}>
      <h1 className={`md:text-7xl py-7 font-extrabold relative overflow-hidden m-0 w-4/5 text-[#8c54c7] dark:text-[#0fffc1] ${styles.title}`}>
        {"< Luis Hernández />"}
        <div className={`mix-blend-hue dark:mix-blend-darken absolute dark:relative top-0 left-0 w-1/2 h-1/2 z-2 pointer-events-none ${styles.aurora}`}>
          <div className={styles.aurora__item} id="1"></div>
          <div className={styles.aurora__item} id="2"></div>
          <div className={styles.aurora__item} id="3"></div>
          <div className={styles.aurora__item} id="4"></div>
        </div>
      </h1>
      </div>
      <p className="text-sm md:text-base mt-2 pr-20 text-slate-300 drop-shadow-xl">
        Sample text of about 3 lines. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce placerat, libero ac consequat luctus, mi elit
        dictum nunc.
      </p>
    </>
  );
}
