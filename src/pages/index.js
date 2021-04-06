import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button } from "reactstrap"

const IndexPage = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>I am building something great</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div>
        <h6>Counter Test</h6>
        <p>Counter: {count}</p>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
