import { Helmet } from "react-helmet-async";


function PageTitle({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}
export default PageTitle;