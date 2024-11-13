import React from "react";

export function registerLayouts(){
const layoutContext = require.context('./layouts')

console.log(layoutContext)
return layoutContext
}

