import React from "react"
import { Helmet } from "react-helmet"

class Seo extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="The purpose of this site is the learn React as I go nad to present it to Rivian to show what I have learned"></meta>
          <title>Rivian Mockbuild</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </div>
    )
  }
}
export default Seo