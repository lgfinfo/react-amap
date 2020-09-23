import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useBezierCurve } from './useBezierCurve';

export interface BezierCurveProps extends OverlayProps, AMap.BezierCurveEvents, AMap.BezierCurveOptions { }
export const BezierCurve = React.forwardRef<BezierCurveProps, BezierCurveProps>((props, ref) => {
  const { bezierCurve } = useBezierCurve(props);
  useImperativeHandle(ref, () => ({ ...props, bezierCurve }));
  return null;
});
