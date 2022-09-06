import * as React from 'react';
import Layout from '../components/Layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
  return (
    <>
      <title>About Me</title>
      <meta name='description' content='Your description' />
    </>
  );
};

// Step 3: Export your component
export default IndexPage;
