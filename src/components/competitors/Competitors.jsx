import styles from "./competitors.module.scss";
import competitors from "../../assets/competitors.json";
import Competitor from "../competitor/Competitor";
const Competitors = () => {
  return (
    <div className={styles.competitors_container}>
      <div className={styles.competitors_header}>
        <span>MissSomali</span>
        <p>
          Build with react js - template is a well-structured, throughfully
          comperized Next js project, giving you a codebase that's productive
          and enjoyable to work in
        </p>
      </div>
      <div className={styles.competitors}>
        {competitors.map((competitor) => (
          <Competitor competitor={competitor} />
        ))}
      </div>
    </div>
  );
};

export default Competitors;
