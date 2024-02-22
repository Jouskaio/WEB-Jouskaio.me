// @ts-ignore
import React, {useCallback} from "react";
// @ts-ignore
import {useQuery} from "@apollo/client";
import TextDefault from "../../components/atom/text/TextDefault";

/** Fetch results of custom query request into a JSON format
 * @param children : object
 * @param query : graphql request asked
 * @param value : int for custom variable search
 * @return JSON format
 */

const Query = ({ children=null, query=null, value: value = null }) => {
  const { data, loading, error, refetch: _refetch } = useQuery(query, {
    variables: { value: value },
  });

  // Use refetch to ensure an error where React cannot fetch data. Do not delete the variable's name otherwise the error
  // will come back
  // Documentation : https://github.com/apollographql/react-apollo/issues/3862
  // eslint-disable-next-line react-hooks/rules-of-hooks
  setTimeout(() => _refetch(), 0);
  if (loading) return (
      <main className={"l-main__a-sizeSection"}>
        {/*TODO: Make an animation loading*/}
        <TextDefault>...</TextDefault>
      </main>
  )
  if (error) return <TextDefault>Error: {JSON.stringify(error)}</TextDefault>;
  return children({data})
  //return children({ data });
};
export default Query;

export function getStrapiMedia(media) {
  const imageUrl =
    typeof media === "string"
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL + media
      : process.env.NEXT_PUBLIC_STRAPI_API_URL +
      media.data.attributes.url;
  return imageUrl;
}