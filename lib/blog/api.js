import {useQuery} from "react-apollo";

/** Fetch result of custom query request into a JSON format
 * @param children : object
 * @param query : graphql request asked
 * @param slug : int for custom variable search
 * @return JSON format
 */
const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};
export default Query;

export function getStrapiMedia(media) {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? media.data.attributes.url
      : process.env.NEXT_PUBLIC_STRAPI_API_URL +
      media.data.attributes.url;
  return imageUrl;
}