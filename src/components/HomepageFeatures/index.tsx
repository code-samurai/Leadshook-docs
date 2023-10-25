import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Leadshook",
    image: "../../statics/easy.png",
    description: (
      <>Leadshook: The Lead Generation Edge You Didn't Even Know Existed</>
    ),
  },
  {
    title: "Customize Your Lead Generation",
    image: "https://via.placeholder.com/150",
    description: (
      <>
        Your leads have happily given you their information, and you’ve them
        tagged all the good stuff. But you’ve gone one step further… With
        LeadsHook’s Zero Tech Tracking you’ll have all the tracking data you
        need for creating new audiences, retargeting, and optimizing campaigns…
        Without the technical headaches. And you can feed all that lovely
        complete conversion data back into paid Ad networks like FB & Google
        (and many others). So they can optimize your campaigns faster, getting
        you the most bang for your buck. (This can be the difference between a
        profitable campaign and a dud)
      </>
    ),
  },
  {
    title: "Technologies",
    image: "@site/static/img/undraw_docusaurus_react.svg",
    description: (
      <>
        We use the latest technologies to make sure your campaigns are fast and
        secure.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
