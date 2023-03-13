import React from 'react';
import Layout from '@theme/Layout';
export default function CV() {
    return <Layout
        title={`Arpit Sharma's CV`}
        description="Arpit Sharma's CV">
        <main style={{ height: "100vh" }}>
            <object data={require('@site/static/img/CV.pdf').default} type="application/pdf" style={{ height: "-webkit-fill-available", width: " -webkit-fill-available" }} />
        </main>
    </Layout>
}

