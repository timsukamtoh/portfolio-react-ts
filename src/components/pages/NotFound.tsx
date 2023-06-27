import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

/** NotFound page for any case of inappropriate pages
 *
 * Routes-> NotFound
*/

export default function NotFound(): ReactElement {

  return(
    <div className="NotFound p-5">
      <h4 className="text-center">The page you are looking for cannot be found</h4>
      <p className="text-center">click<Link to="/"> here</Link>to go back home.</p>
    </div>
  )
}

