const e="data:image/png;base64,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",c=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),o="/everdell-scoring-app/assets/icon-events-C-8OYrKt.png",i=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),t="/everdell-scoring-app/assets/icon-journey-CQR73abf.png",a=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"})),s="/everdell-scoring-app/assets/icon-prosperity-SLIQHlS8.png",l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),A="/everdell-scoring-app/assets/icon-resources-CglTtEXZ.png",g=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),n="data:image/png;base64,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",u=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),r="data:image/png;base64,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",y=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),p=[{key:"base_cards",title:"Cards",icon:"@/assets/icons/icon-cards.png"},{key:"base_prosperity",title:"Prosperity",icon:"@/assets/icons/icon-prosperity.png"},{key:"base_events",title:"Events",icon:"@/assets/icons/icon-events.png"},{key:"base_journey",title:"Journey",icon:"@/assets/icons/icon-journey.png"},{key:"base_tokens",title:"Point tokens",icon:"@/assets/icons/icon-tokens.png"}];export{y as _,u as a,p as b,g as c,l as d,a as e,i as f,c as g};
