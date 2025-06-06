export interface PageMeta {
    /** The title of the page */
    title: string;
    /** The description of the page */
    description?: string;
    /** The path to the image for the page */
    socialImage?: string;
}

export interface ArticleMeta extends PageMeta {
    /** The publication date of the article */
    articleDate: string;
}
