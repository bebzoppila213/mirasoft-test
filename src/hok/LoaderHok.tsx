import React from "react";
import Spinner from "react-bootstrap/Spinner";

type LoaderHokProps = {
  isLoading: boolean;
  children: React.ReactNode
};

export default function LoaderHok({ isLoading, children }: LoaderHokProps) {
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return <>{children}</>
}
