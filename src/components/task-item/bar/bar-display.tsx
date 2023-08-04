import React from "react";
import style from "./bar.module.css";
import pstyles from "../project/project.module.css";
// import { StandardTooltipContent } from "../../other/tooltip";

type BarDisplayProps = {
  x: number;
  y: number;
  actualX?: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  actualX,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  barCornerRadius,
  styles,
  onMouseDown
}) => {
  
  // const tooltipContent = StandardTooltipContent;
  
  const getProcessColor = () => {
    return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };

  return (
    <g onMouseDown={onMouseDown}>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}
      />
      <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getProcessColor()}
      />
      {actualX &&  <rect
      // onMouseEnter={() => alert('hover baseline')}
        fill="#d3d3d3"
        x={actualX}
        width={100}
        y={y + height - 1}
        height={5}
        rx={barCornerRadius}
        ry={barCornerRadius}
        className={pstyles.projectTop}
      />}
     
    </g>
  );
};
