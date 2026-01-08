import styles from "./PromoSection.module.css";

import seedsImg from "../../assets/images/seeds.png";
import fertilizerImg from "../../assets/images/fertilizer.png";
import equipmentImg from "../../assets/images/pump.png";
import PromoCard from "./PromoCard";

function PromoSection() {
  return (
    <div className={styles.container}>
      <PromoCard
        title="High-quality Seeds"
        description="Better yield for every season."
        buttonText="Order Now"
        image={seedsImg}
        bgColor="#2EBC73"
      />

      <PromoCard
        title="Premium Fertilizers"
        description="Nutrient-rich care for healthy crops."
        buttonText="Order Now"
        image={fertilizerImg}
        bgColor="#FFC93C"
      />

      <PromoCard
        title="Farm Equipment"
        description="Modern tools for smarter farming."
        buttonText="Shop Now"
        image={equipmentImg}
        bgColor="#7CA6FF"
      />
    </div>
  );
}

export default PromoSection;
