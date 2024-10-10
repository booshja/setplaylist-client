import type { ReactNode } from "react";
import { QueryProviders } from "./QueryProviders";
import { StyledComponentsRegistry } from "@/lib";

interface AllTheProvidersProps {
    children: ReactNode;
}

export const AllTheProviders = ({ children }: AllTheProvidersProps) => {
    return (
        <StyledComponentsRegistry>
            <QueryProviders>{children}</QueryProviders>
        </StyledComponentsRegistry>
    );
};
