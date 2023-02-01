import React from 'react';
import Layout from '@theme/Layout';
import { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';





function Gallery() {

  
  return (

    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
          function getWindowDimensions() {
          const { innerWidth: width, innerHeight: height } = window
          return {
            width,
            height
          };
        }

        function useWindowDimensions() {
          const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

          useEffect(() => {
            function handleResize() {
              setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);

          return windowDimensions;
        }

        const { height, width } = useWindowDimensions();

        return <Layout
          // title={`Hello from siteConfig.title`}
          title={`Life in Pics`}
          description="Picture describes a 1000 words!">
          {/* <HomepageHeader /> */}
          <main style={{ backgroundColor: "#eef1f8" }}>
            <section >
              <div style={{ textAlign: "center", paddingTop: "1vw" }}>
                <iframe src="https://embedsocial.com/facebook_album/pro_hashtag/f0c021345f37b72843841a691e4aa1e386ab7bb3" width={width} height={height} frameBorder="0" marginHeight="10" marginWidth="10"></iframe>
              </div>
            </section>
          </main>
        </Layout>

      }}
    </BrowserOnly>
  )
}

export default Gallery;