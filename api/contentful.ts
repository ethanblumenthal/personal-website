const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
  }
  tagsCollection {
    items {
      ...TagParts
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getAllPostsBySlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractPostEntries(entries);
}

export async function getAllPosts(preview) {
  const entries = await fetchGraphQL(
    `fragment TagParts on Tag {
      name
      slug
  }
    
    query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractPostEntries(entries);
}

export async function getPostBySlug(slug, preview) {
  const entry = await fetchGraphQL(
    `
    fragment TagParts on Tag {
      name
      slug
  }
  query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `
    fragment TagParts on Tag {
      name
      slug
  }
    query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

const PROJECT_GRAPHQL_FIELDS = `
  date
  title
  subtitle
  description
  coverImage {
    url
  }
  content {
    json
  }
  slug
`;

function extractProject(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getAllProjectsBySlug() {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractProjectEntries(entries);
}

export async function getAllProjects(preview) {
  const entries = await fetchGraphQL(
    `query {
      projectCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractProjectEntries(entries);
}

export async function getProjectBySlug(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    project: extractProject(entry),
    moreProjects: extractProjectEntries(entries),
  };
}

const TAG_GRAPHQL_FIELDS = `
  name
  slug
`;

function extractTag(fetchResponse) {
  return fetchResponse?.data?.tagCollection?.items?.[0];
}

function extractTagEntries(fetchResponse) {
  return fetchResponse?.data?.tagCollection?.items;
}

export async function getAllTagsBySlug() {
  const entries = await fetchGraphQL(
    `query {
      tagCollection(where: { slug_exists: true }, order:name_ASC) {
        items {
          ${TAG_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractTagEntries(entries);
}

export async function getAllTags(preview) {
  const entries = await fetchGraphQL(
    `query {
      tagCollection(order:name_ASC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${TAG_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractTagEntries(entries);
}

export async function getTagBySlug(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      tagCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${TAG_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      tagCollection(where: { slug_not_in: "${slug}" }, order:name_ASC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${TAG_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    tag: extractTag(entry),
    moreTags: extractTagEntries(entries),
  };
}
