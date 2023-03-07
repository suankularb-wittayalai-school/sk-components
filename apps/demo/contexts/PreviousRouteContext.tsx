import { createContext } from "react";

const PreviousRouteContext = createContext<string | null>(null);

export default PreviousRouteContext;
