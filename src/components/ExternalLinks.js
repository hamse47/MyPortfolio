import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

class ExternalLinks extends React.Component {
  render() {
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
