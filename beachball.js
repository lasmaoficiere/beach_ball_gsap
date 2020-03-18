"use strict";

import { gsap } from "gsap";

gsap.to(".ball", { duration: 2, x: 400, rotate: 200 });
gsap.to(".ball", { delay: 2, scaleY: 0, yPercent: 50 });
