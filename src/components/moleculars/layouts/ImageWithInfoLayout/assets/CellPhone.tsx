import * as React from "react";
import Svg, { Path } from "react-native-svg";

export type Props = {
  height?: number;
};

function CellPhone({ height }: Props) {
  return (
    <Svg width={151} height={height || 256} viewBox="0 0 151 256" fill="none">
      <Path
        d="M124.799 196.226c-2.309 4.94-63.955 15.467-74.999 14.191-6.41-.74-23.952-116.681-20.737-120.112 4.825-5.148 67.904-20.117 74.276-15.783 5.896 4.01 24.906 114.328 21.46 121.704z"
        fill="#E5FBED"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.652 56.105a4.507 4.507 0 015.221 3.656l26.218 148.691a4.507 4.507 0 11-8.877 1.565L1.996 61.326a4.507 4.507 0 013.656-5.221z"
        fill="#FFEDA5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.323 201.689a4.507 4.507 0 015.221 3.656c.682 3.867 1.48 7.594 2.493 11.338.68 2.515 1.292 4.207 2.418 5.656.304.391 1.027.912 2.559 1.296 1.488.372 3.252.491 4.982.486 4.144-.014 8.222-.737 12.709-1.532 1.023-.182 2.067-.367 3.137-.548 3.227-.546 6.418-1.069 9.595-1.589 4.754-.779 9.477-1.553 14.24-2.392 2.484-.438 4.964-.861 7.435-1.282 12.826-2.185 25.435-4.333 37.267-8.418a4.507 4.507 0 112.942 8.52c-12.597 4.35-26.062 6.639-38.88 8.818-2.427.412-4.83.821-7.198 1.239-4.79.844-9.638 1.638-14.453 2.427-3.17.52-6.326 1.037-9.443 1.565-.904.153-1.835.319-2.788.489-4.519.806-9.533 1.701-14.533 1.717-2.05.006-4.665-.121-7.2-.756-2.491-.623-5.436-1.869-7.487-4.507-2.297-2.954-3.276-6.142-4.004-8.836-1.095-4.05-1.949-8.045-2.668-12.126a4.507 4.507 0 013.656-5.221zM143.888 206.783a4.507 4.507 0 01-5.221-3.656L113.975 63.091a4.507 4.507 0 118.877-1.565l24.692 140.036a4.507 4.507 0 01-3.656 5.221z"
        fill="#FFEDA5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.197 66.747a4.506 4.506 0 01-5.221-3.656c-.739-4.19-1.585-8.24-2.632-12.318-.705-2.749-1.355-4.724-2.525-6.435-.375-.547-1.079-1.083-2.374-1.492-1.304-.411-2.863-.58-4.425-.619-3.745-.092-7.4.556-11.535 1.289-.953.169-1.93.342-2.94.512-2.994.503-5.946.98-8.882 1.455-4.384.71-8.732 1.412-13.127 2.187-2.307.407-4.607.797-6.895 1.184-11.846 2.007-23.388 3.963-34.172 8a4.507 4.507 0 11-3.16-8.44c11.665-4.37 24.205-6.487 36.043-8.487 2.235-.377 4.445-.75 6.619-1.134 4.426-.78 8.92-1.507 13.375-2.228 2.927-.473 5.838-.944 8.704-1.426.816-.138 1.663-.289 2.534-.445 4.173-.747 8.916-1.595 13.658-1.478 1.946.048 4.459.259 6.915 1.034 2.465.778 5.21 2.234 7.101 4.999 2.123 3.103 3.079 6.407 3.817 9.283 1.115 4.341 2.006 8.62 2.778 12.994a4.508 4.508 0 01-3.656 5.221z"
        fill="#FFEDA5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.56 59.91a4.507 4.507 0 01-3.119 5.56c-4.827 1.357-9.823 2.198-14.534 2.99-1.225.206-2.432.409-3.611.617-.199.035-.45.073-.751.12-.612.093-1.43.218-2.437.41-.292.057-.544.109-.752.155a4.51 4.51 0 01-5.346-.226 4.63 4.63 0 01-1.354-1.777 4.577 4.577 0 01-.202-3.05 4.7 4.7 0 011.883-2.6l.008-.004c.697-.476 1.44-.709 1.696-.79l.006-.001c.73-.23 1.631-.419 2.365-.56a99.299 99.299 0 013.319-.554c1.336-.236 2.647-.457 3.938-.675 4.645-.782 9.018-1.52 13.332-2.733a4.507 4.507 0 015.558 3.118zM43.745 69.914l.005-.001a.924.924 0 01-.005.001zM78.998 53.57c2.428-.897 5.457.024 6.92 2.561.651 1.128 1.207 2.919.442 4.846-.762 1.922-2.402 2.872-3.759 3.176a5.709 5.709 0 01-6.699-3.986 4.508 4.508 0 01-.191-1.273 5.179 5.179 0 01-.03-.803c.1-2.486 1.842-3.976 3.317-4.52z"
        fill="#FFF1E6"
      />
      <Path
        d="M97.608 144.588l-12.75-1.827c-1.892-.272-2.342-2.826-.657-3.728l11.356-6.078a1.573 1.573 0 00.641-2.124l-1.451-2.747a1.553 1.553 0 00-2.109-.653l-11.356 6.077c-1.685.902-3.538-.903-2.705-2.634l5.625-11.659a1.584 1.584 0 00-.722-2.104l-2.775-1.368a1.55 1.55 0 00-2.084.721l-5.624 11.659c-.835 1.732-3.382 1.367-3.717-.531l-2.254-12.786a1.566 1.566 0 00-1.81-1.278l-3.033.535a1.566 1.566 0 00-1.263 1.82l9.98 56.6c.151.855.96 1.428 1.809 1.278l3.037-.535a1.567 1.567 0 001.263-1.82l-2.255-12.786c-.335-1.898 1.934-3.112 3.31-1.771l9.274 9.033c.62.603 1.606.588 2.205-.035l2.14-2.235a1.584 1.584 0 00-.042-2.224l-9.274-9.032c-1.377-1.341-.253-3.671 1.642-3.4l12.75 1.827a1.556 1.556 0 001.758-1.335l.423-3.081a1.575 1.575 0 00-1.329-1.777l-.003-.002z"
        fill="#6DDFA6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M140.087 6.578a4.507 4.507 0 011.161 6.267c-2.431 3.535-5.108 7.049-7.703 10.457-1.409 1.85-2.795 3.668-4.103 5.44a4.507 4.507 0 01-7.253-5.352 457.693 457.693 0 014.397-5.831c2.492-3.269 4.909-6.44 7.234-9.82a4.507 4.507 0 016.267-1.161z"
        fill="#6DDFA6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.396 5.045a4.507 4.507 0 013.146 5.543 270.41 270.41 0 00-3.103 12.414 4.508 4.508 0 01-8.793-1.985 279.39 279.39 0 013.206-12.826 4.508 4.508 0 015.544-3.146z"
        fill="#FFE7FB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.916 39.137a4.506 4.506 0 014.507-4.507h9.464a4.507 4.507 0 010 9.014h-9.464a4.506 4.506 0 01-4.507-4.507z"
        fill="#FFA86D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.787 17.134a4.506 4.506 0 01-.617-6.344l6.013-7.31a4.507 4.507 0 016.961 5.728l-6.013 7.309a4.507 4.507 0 01-6.344.617z"
        fill="#FFEDA5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.688 219.048a4.506 4.506 0 015.96 2.258c4.063 9.022 8.938 16.636 16.034 23.087a4.507 4.507 0 01-6.063 6.67c-8.265-7.514-13.783-16.269-18.19-26.055a4.507 4.507 0 012.26-5.96z"
        fill="#FFE7FB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.153 235.863a4.507 4.507 0 016.333.725 100.023 100.023 0 005.04 5.879 4.508 4.508 0 01-6.606 6.134 109.032 109.032 0 01-5.491-6.406 4.506 4.506 0 01.724-6.332z"
        fill="#FFA86D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.213 241.822a4.507 4.507 0 016.333.724 99.72 99.72 0 005.039 5.88 4.508 4.508 0 01-6.606 6.134 109.025 109.025 0 01-5.49-6.406 4.506 4.506 0 01.724-6.332z"
        fill="#6DDFA6"
      />
    </Svg>
  );
}

export default CellPhone;