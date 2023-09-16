import React, { PropsWithChildren } from "react";

export const Page: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="absolute inset-0">{children}</div>
);
