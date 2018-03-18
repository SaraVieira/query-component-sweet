import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_LINKS = gql`
  query {
    allLinks {
      url
      type
      meta {
        author
        date
        description
        image
        logo
        publisher
        title
        url
      }
    }
  }
`;

export default () => (
  <Query query={GET_LINKS}>
    {({ loading, error, data: { allLinks } }) => {
      if (loading) {
        return "loading son";
      }
      if (error) {
        return "OH NO THE QUERIES OH NO";
      }

      return allLinks.map(link => (
        <article class="bg-white center mw5 ba b--black-10 mv4 avenir">
          <div class="pv2 ph3">
            <h1 class="f6 ttu tracked">{link.meta.title}</h1>
          </div>
          <img src={link.meta.image} class="w-100 db" alt={link.meta.title} />
          <div class="pa3">
            <a href={link.url} target="_blank" class="link dim lh-title">
              See Awesome Webpack things 🦄
            </a>
            <small class="gray db pv2">
              Category: <time>{link.type}</time>
            </small>
          </div>
        </article>
      ));
    }}
  </Query>
);
