export const queryLaunches = `
query {
  launches(limit: 10, order: "DESC") {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
    }
  }
}
`;
