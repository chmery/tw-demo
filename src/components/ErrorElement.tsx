import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";

export const ErrorElement = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="text-center">
      <h1 className="font-extrabold text-5xl">
        Oops! We got lost in the digital wilderness... 😵
      </h1>
      <p className="py-8 flex flex-col gap-y-2">
        {isRouteErrorResponse(error) && error.status === 404 && (
          <>
            <span className="text-grey-dark">
              {`${error.status} ${error.statusText}`}
            </span>
            The requested URL could not be located on our server. Please check
            the web address for any typos or try a different page.
          </>
        )}
        {error instanceof Error && (
          <>
            An unexpected error occurred. you can try refreshing the page or go
            back and try again.
          </>
        )}
      </p>
      <div className="flex gap-x-2 justify-center">
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <LinkButton to="/" text="Homepage" />
      </div>
    </div>
  );
};
