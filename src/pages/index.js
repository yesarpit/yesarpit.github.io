import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hands-on Engineer | Human First Manager | Ambitious Thinker`}
      description="Arpit Sharma, a Software Engineering Manager, works with enterprises to create user-friendly digital experiences utilizing data.">
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