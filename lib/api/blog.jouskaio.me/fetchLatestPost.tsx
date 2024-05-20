import React from "react";

export const fetchLatestArticles = async () => {
    const response = await fetch('https://blog.jouskaio.me/wp-json/wp/v2/posts?per_page=3');
    const posts = await response.json();

    const articlesData = await Promise.all(posts.map(async (post) => {
        let featuredImageUrl = '';
        if (post.featured_media) {
            const mediaResponse = await fetch(`https://blog.jouskaio.me/wp-json/wp/v2/media/${post.featured_media}`);
            const media = await mediaResponse.json();
            featuredImageUrl = media.source_url;
        }

        let category = '';
        if (post.categories.length > 0) {
            const categoryResponse = await fetch(`https://blog.jouskaio.me/wp-json/wp/v2/categories/${post.categories[0]}`);
            const categoryData = await categoryResponse.json();
            category = categoryData.name;
        }

        return {
            title: post.title.rendered,
            text: post.excerpt.rendered,
            media: featuredImageUrl,
            url: post.slug,
            tags: category ? [{ name: category, color: '', slug: '' }] : [],  // Assuming a single category for simplicity
            classname: undefined,
        };
    }));

    return articlesData;
};
