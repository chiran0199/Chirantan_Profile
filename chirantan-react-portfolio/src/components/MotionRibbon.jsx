import { asset } from "../lib/asset.js";
export default function MotionRibbon() {
  return (
    <div className="motion-ribbon" aria-label="Audit, test, measure, improve">
      <div className="motion-ribbon-track" aria-hidden="true">
        <span>{"AUDIT"}</span>
        <i>{"✳"}</i>
        <span>{"TEST"}</span>
        <i>{"✳"}</i>
        <span>{"MEASURE"}</span>
        <i>{"✳"}</i>
        <span>{"IMPROVE"}</span>
        <i>{"✳"}</i>
        <span>{"GROW"}</span>
        <i>{"✳"}</i>
        <span>{"AUDIT"}</span>
        <i>{"✳"}</i>
        <span>{"TEST"}</span>
        <i>{"✳"}</i>
        <span>{"MEASURE"}</span>
        <i>{"✳"}</i>
        <span>{"IMPROVE"}</span>
        <i>{"✳"}</i>
        <span>{"GROW"}</span>
        <i>{"✳"}</i>
      </div>
    </div>
  );
}
