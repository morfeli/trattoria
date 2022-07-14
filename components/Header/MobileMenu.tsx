import styles from "./styles/MobileMenu.module.css";

type MobileMenuProps = {
  toggleMenu: React.MouseEventHandler<HTMLDivElement>;
};

export const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" id="checkbox" />
      <div className={styles.toggleButton} onClick={toggleMenu}>
        <div className={styles.top}></div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}></div>
      </div>
    </label>
  );
};
