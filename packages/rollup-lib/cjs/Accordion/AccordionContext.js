"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");const o=e.createContext(null);exports.AccordionContext=o,exports.useAccordionContext=function(){const t=e.useContext(o);if(!t)throw new Error("Accordion Compound Components cannot be rendered outside the Accordion component");return t};
