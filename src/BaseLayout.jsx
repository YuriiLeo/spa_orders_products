import PropTypes from "prop-types";

export const BaseLayout = ({ header, sidebar, children }) => {
  return (
    <div className="app">
      {header}
      <div className="hero">
        {sidebar}
        <main>{children}</main>
      </div>
    </div>
  );
};

BaseLayout.propTypes = {
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  children: PropTypes.node,
};
