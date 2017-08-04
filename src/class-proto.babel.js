import mojs from 'mo-js';
import MojsCurveEditor from 'mojs-curve-editor';

const mojsCurve = new MojsCurveEditor({
  // Name of the Curve you are working on. The name is used to
  // identify record in `localStorage` to restore the state from
  // when page gets reloaded, so please specify unique names if
  // you use more than one editor on the same page.
  name:         'bounce curve'
});
