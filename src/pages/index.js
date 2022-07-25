import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bold Engineer | Human First Manager | Ambitious Thinker`}
      description="Arpit Sharma is a Software Engineer and Engineering Manager working with biggest companies to develop data-driven delightful digital experiences">
      {/* <HomepageHeader /> */}
      <main>
        <section className={styles.features}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <img src="./img/pf.png" alt="Portfolio Image" />
          </div>
        </section>
      </main>
    </Layout>
  );
}