import styles from "./styles/MobileMenu.module.css";

type MobileMenuProps = {
  toggleMenu: React.MouseEventHandler<HTMLDivElement>;
};

export const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <div
      onClick={toggleMenu}
      className="bg-slate-300 w-12 h-10 z-50 flex items-center justify-center rounded-lg cursor-pointer relative"
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          id="checkbox"
          className="flex opacity-0 cursor-pointer scale-400"
        />
        <div className={styles.toggleButton}>
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
        </div>
      </label>
    </div>
  );
};
