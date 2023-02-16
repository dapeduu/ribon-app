import * as React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";

type Props = {
  color?: string;
};
function Sparkles({ color = "#ffffff" }: Props) {
  return (
    <Svg width="34" height="33" viewBox="0 0 34 33" fill="none">
      <Mask
        id="mask0_4362_17412"
        mask="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="34"
        height="33"
      >
        <Rect
          x="0.920898"
          y="0.345703"
          width="32.3077"
          height="32.3077"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_4362_17412)">
        <Path
          d="M25.8245 11.9224L24.411 8.75894L21.2476 7.34548L24.411 5.89836L25.8245 2.76855L27.2379 5.89836L30.4014 7.34548L27.2379 8.75894L25.8245 11.9224ZM25.8245 30.2301L24.411 27.1003L21.2476 25.6532L24.411 24.2397L25.8245 21.0762L27.2379 24.2397L30.4014 25.6532L27.2379 27.1003L25.8245 30.2301ZM12.8677 25.6532L10.0408 19.3599L3.74756 16.4993L10.0408 13.6387L12.8677 7.34548L15.7283 13.6387L22.0216 16.4993L15.7283 19.3599L12.8677 25.6532Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export default Sparkles;
