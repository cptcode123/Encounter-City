# Content Management Guide

This guide explains how to update page content and manage blog posts in the Encounter City website.

## Table of Contents
- [Updating Page Content](#updating-page-content)
- [Adding Blog Posts](#adding-blog-posts)
- [Additional Resources](#additional-resources)

---

## Updating Page Content

Page content is managed through JSON files located in the `data/` folder. Each page has its own JSON file that defines its content structure.

### Available Page Files

The following page files are available in the `data/` directory:
- `home.json` - Homepage content
- `about.json` - About page content
- `contact.json` - Contact page content
- `services.json` - Services page content
- `blog.json` - Blog page content
- `give.json` - Give/donation page content
- `member.json` - Member page content
- `encounter-service.json` - Encounter Service page content
- `school-of-the-spirit.json` - School of the Spirit page content
- `a-time-to-contend.json` - A Time to Contend page content

### How to Update Page Content

1. **Locate the JSON file** for the page you want to edit in the `data/` folder.

2. **Open the JSON file** in your code editor.

3. **Edit the content** following the existing structure. For example, the `home.json` file has this structure:
   ```json
   {
     "hero": {
       "slides": [
         {
           "title": "Welcome to The Encounter City Christian Center",
           "subtitle": "Where lives are transformed in Christ's presence.",
           "image": "/landscape-1.jpg"
         }
       ]
     },
     "aboutSection": {
       "title": "You are welcome here",
       "description": "At Encounter City, we believe in...",
       "image": "/rect-img-6.jpg",
       "buttonText": "Join our Family",
       "buttonHref": "/member"
     }
   }
   ```

4. **Save the file**. The changes will be reflected on the website after the page revalidates (the site uses ISR with 60-second revalidation).

### Important Notes

- **Maintain JSON syntax**: Ensure your JSON is valid. Use a JSON validator if needed.
- **Image paths**: Image paths should start with `/` and reference files in the `public/` folder.
- **Preserve structure**: Keep the same object structure and keys as defined in the original file. Adding or removing keys may cause errors if the page code expects them.
- **Test changes**: After making changes, check the corresponding page on the website to ensure everything displays correctly.

### Example: Updating Homepage Hero Section

To update the hero section on the homepage:

1. Open `data/home.json`
2. Find the `hero` section with the `slides` array
3. Update the title, subtitle, or image path for any slide
4. Save the file

```json
{
  "hero": {
    "slides": [
      {
        "title": "Your New Title",
        "subtitle": "Your new subtitle text",
        "image": "/your-new-image.jpg"
      }
    ]
  }
}
```

---

## Adding Blog Posts

Blog posts are managed through **Sanity CMS**, a headless content management system. Posts are created and edited using the Sanity Studio interface.

### Prerequisites

Before adding blog posts, ensure you have:
1. Sanity Studio set up and configured
2. Required environment variables configured (see `.env.local` or your environment configuration):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to `2025-10-31`)

### Accessing Sanity Studio

1. **Start your development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Navigate to Sanity Studio** in your browser:
   ```
   http://localhost:3000/studio
   ```

3. **Log in** to Sanity Studio using your Sanity account credentials.

### Creating a New Blog Post

1. **Open Sanity Studio** at `/studio`

2. **Click on "Posts"** in the left sidebar

3. **Click the "Create" button** or click on an existing post to edit it

4. **Fill in the post fields**:

   - **Title** (required): The title of your blog post
   - **Slug** (required): URL-friendly version of the title (auto-generated from title, but you can edit it)
   - **Author**: Select an existing author or create a new one (see [Managing Authors](#managing-authors))
   - **Main Image**: Upload and add an image for the post
     - Click on the image field
     - Upload an image or select an existing one
     - Add alternative text for accessibility
   - **Categories**: Select one or more categories (see [Managing Categories](#managing-categories))
   - **Published At**: Set the publication date and time
   - **Excerpt**: A short summary of the post (max 160 characters) - appears in blog listings
   - **Body**: The main content of your blog post using the rich text editor

5. **Click "Publish"** in the top-right corner when you're ready to publish

6. The post will appear on your blog at `/blog` and can be accessed at `/blog/[slug]`

### Managing Authors

To create or edit authors:

1. In Sanity Studio, click on **"Authors"** in the left sidebar
2. Click **"Create"** to add a new author or click on an existing author to edit
3. Fill in the author details:
   - **Name**: The author's name
   - **Slug**: URL-friendly version (auto-generated)
   - **Image**: Author's profile picture (optional)
   - **Bio**: Author's biography (optional)
4. Click **"Publish"** to save

### Managing Categories

To create or edit categories:

1. In Sanity Studio, click on **"Categories"** in the left sidebar
2. Click **"Create"** to add a new category or click on an existing category to edit
3. Fill in the category details:
   - **Title**: Category name (e.g., "News", "Devotionals", "Events")
   - **Slug**: URL-friendly version (auto-generated)
   - **Description**: Optional description of the category
4. Click **"Publish"** to save

### Blog Post Fields Explained

- **Title**: The main heading of your blog post
- **Slug**: Used in the URL (e.g., `/blog/my-blog-post`). Must be unique.
- **Author**: Links to an author profile. You must create authors before assigning them.
- **Main Image**: Featured image shown in blog listings and at the top of the post
- **Categories**: Used to organize posts. Posts with the "news" category appear in the news section on the homepage.
- **Published At**: Controls when the post appears. Can be set to a future date for scheduling.
- **Excerpt**: Short preview text shown in blog listings. Keep it concise and engaging.
- **Body**: Full post content using a rich text editor. Supports:
  - Headings (H1-H6)
  - Paragraphs
  - Bold and italic text
  - Lists (ordered and unordered)
  - Links
  - Images
  - And more formatting options

### Editing Existing Blog Posts

1. Open Sanity Studio at `/studio`
2. Click on **"Posts"** in the left sidebar
3. Find and click on the post you want to edit
4. Make your changes
5. Click **"Publish"** to save changes, or **"Unpublish"** to remove it from the website

### Post Status

- **Published**: The post is live on the website
- **Draft**: The post is saved but not visible on the website
- **Unpublished**: Previously published posts that have been taken offline

---

## Additional Resources

### Page Content Files Location
```
/data/
  ├── home.json
  ├── about.json
  ├── contact.json
  ├── services.json
  └── ...
```

### Sanity Studio
- **URL**: `http://localhost:3000/studio` (development)
- **Production**: `https://your-domain.com/studio`

### Technical Details

- **Page Content**: Loaded via `getPageData()` function in `lib/data.ts`
- **Blog Posts**: Queried from Sanity using GROQ queries in `lib/queries.ts`
- **Revalidation**: Pages revalidate every 60 seconds to fetch new content

### Troubleshooting

**Page content not updating?**
- Check that your JSON syntax is valid
- Verify the file structure matches the expected format
- Clear your browser cache or wait for the revalidation period

**Blog post not appearing?**
- Ensure the post is published (not in draft)
- Check that the "Published At" date is not in the future
- Verify your Sanity environment variables are correctly configured
- Check the browser console for any errors

**Can't access Sanity Studio?**
- Ensure your development server is running (`npm run dev`)
- Verify your Sanity environment variables are set
- Check that you're logged in to Sanity with appropriate permissions

---

For additional support, refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

