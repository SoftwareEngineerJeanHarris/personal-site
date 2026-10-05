import { SectionHeading } from "../components/SectionHeading";
import { ActionLink } from "../components/ActionLink";

export function NotFoundPage() {
  return <><SectionHeading eyebrow="404" title="Page not found." description="This link doesn’t point to a page in the portfolio." /><ActionLink href="#/home">Return home</ActionLink></>;
}
