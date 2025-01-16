import Spline from '@splinetool/react-spline';

import styles from './SolarSystemPage.module.scss';

export function SolarSystemPage() {
  return (
    <div className={styles.scene_wrapper}>
      <Spline scene="https://prod.spline.design/lXgvnDjd8ihedDgr/scene.splinecode" />
    </div>
  );
}

// // Instantiate a loader
// const loader = new SplineLoader();

// // Load a .splinecode file
// loader.load(
//   // path to the .splinecode file, either from the Spline servers or local
//   'assets/scene.splinecode',
//   // called when the resource is loaded
//   (splineScene) => {
//     scene.add(splineScene);
//   },
//   null,
//   // called when loading has errors
//   (error) => {
//     console.log('An error happened');
//   },
// );
