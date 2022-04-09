import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <section className={styles.features}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <img src="./img/pf.webp" alt="Portfolio Image" />
          </div>
        </section>
      </main>
    </Layout>
  );
}