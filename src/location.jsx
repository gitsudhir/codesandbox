import React, { useState } from "react";
import geolib from "geolib";
export const Location = () => {
  const [latitude, setLatitude] = useState(" ");
  const [longitude, setLongitude] = useState("");
  const [dist, setDist] = useState();
  const [bearing, setBearing] = useState();
  const [x, setX] = useState(3);
  const [y, setY] = useState(2);
  const [ans, setAns] = useState({});
  const answer = () => {
    console.log(x, y, dist, bearing);

    //alert(`${latitude}  and ${longitude}`);
    var initialPoint = { lat: latitude, lon: longitude };
    //var dist =1234
    //var bearing = 45;

    const destination = geolib.computeDestinationPoint(
      initialPoint,
      dist,
      bearing
    );
    console.table(destination);
    setAns(destination);
    console.log("calulation");
  };

  function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
  }

  //console.log(calcAngleDegrees(2, 3));
  return (
    <>
      <h1>find location</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          answer();
        }}
      >
        <label htmlFor="lat">latitude : </label>
        <input
          name="lat"
          type="text"
          onChange={e => setLatitude(e.target.value)}
          value={latitude}
          required
        />
        <br />
        <label htmlFor="long">longitude : </label>
        <input
          name="long"
          type="text"
          onChange={e => setLongitude(e.target.value)}
          value={longitude}
          required
        />
        <br />
        <label htmlFor="x">x: </label>
        <input
          name="x"
          type="text"
          onChange={e => setX(e.target.value)}
          value={x}
          required
        />
        <br />
        <label htmlFor="y"> y : </label>
        <input
          name="y"
          type="text"
          onChange={e => setY(e.target.value)}
          value={y}
          required
        />
        <br />
        <label htmlFor="dist">distance (in meters) : </label>
        <input
          name="dist"
          type="text"
          onChange={e => setDist(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))}
          value={dist}
          required
        />
        <br />
        <label htmlFor="bearing">bearing (in degrees) : </label>
        <input
          name="bearing"
          type="text"
          onChange={e => setBearing(calcAngleDegrees(y, x))}
          value={calcAngleDegrees(y, x)}
          required
        />
        <br />

        <button type="submit">click</button>
        <h3>{ans.latitude}</h3>
        <h3>{ans.longitude}</h3>
      </form>

      <img
        src="http://academic.brooklyn.cuny.edu/geology/leveson/core/graphics/mapgraphics/circ-360newsx.gif"
        alt="ij"
      />
      <ul>
        Reference:
        <li>
          <a href="https://math.stackexchange.com/questions/1596513/find-the-bearing-angle-between-two-points-in-a-2d-space">
            find-the-bearing-angle-between-two-points-in-a-2d-space
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/geolib">npm install geolib</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2">
            Math.atan2(y,x)
          </a>
        </li>
        <li>
          <a href="https://www.movable-type.co.uk/scripts/latlong.html">
            final
          </a>
        </li>
      </ul>
    </>
  );
};
