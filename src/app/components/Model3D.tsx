"use client";
import Spline from "@splinetool/react-spline";
import BackGlow3D from "./BackGlow3D";
import styles from "./styles/Model3D.module.scss";

export default function Model3D() {
  return (
    <div className={`scene ${styles.scene}`}>
      <Spline
        scene="https://prod.spline.design/UfFHVucRQt1WJTuc/scene.splinecode
      "
      />
      <BackGlow3D />
    </div>
  );
}
