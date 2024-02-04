import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  auth: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures}) => [
            ...defaultFeatures,
        ]
      }),
    },
  ],
};

export default Posts;
