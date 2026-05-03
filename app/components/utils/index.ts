export * from './currency';
// export * from './Modal';

import React from "react";

export const Modals = React.lazy(() =>
  import("./Modal").then(module => ({
    default: module.Modal
  }))
);