import React from "react";
import {useQuery, DocumentNode} from "@apollo/client";
import TextDefault from "../../components/atom/text/TextDefault";

/** Fetch results of custom query request into a JSON format
 * @param children : function
 * @param value : int for custom variable search
 * @return JSON format
 */

interface QueryProps {
  children: (result: { data: any }) => React.ReactNode;
  query: DocumentNode;
  value?: string | number | null;
}

const Query = ({ children, query, value = null }: QueryProps) => {
  const { data, loading, error, refetch: _refetch } = useQuery(query, {
    variables: { value: value },
  });

  // Use refetch only if necessary. Calling it in a timeout at every render is a major performance bottleneck.
  if (loading) return (
      <main className={"l-main__a-sizeSection"}>
        {/*TODO: Make an animation loading*/}
        <TextDefault>...</TextDefault>
      </main>
  )
  if (error) return <TextDefault>Error: {JSON.stringify(error)}</TextDefault>;
  return <>{children({data})}</>;
};
export default Query;

export function getStrapiMedia(media: any) {
  if (!media) return "";
  const imageUrl =
    typeof media === "string"
      ? (process.env.BLOG_API_URL_URL || "") + media
      : (process.env.BLOG_API_URL_URL || "") +
      (media.data?.attributes?.url || "");
  return imageUrl;
}