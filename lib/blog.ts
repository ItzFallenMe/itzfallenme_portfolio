export type BlogSection={heading:string;paragraphs:string[];bullets?:string[]};
export type BlogPost={slug:string;title:string;excerpt:string;date:string;readingTime:string;tags:string[];sections:BlogSection[]};
export const posts:BlogPost[]=[
 {slug:"searchable-project-gallery",title:"A Searchable Project Gallery Without Extra Dependencies",excerpt:"Filtering project data by category and keyword with React state and memoization.",date:"2026-11-20",readingTime:"4 min",tags:["Next.js","React"],sections:[
 {heading:"Keep project information in one source",paragraphs:["A gallery becomes easier to maintain when each project has a consistent shape: title, category, description, and technology tags. The page can render the same data in multiple places without maintaining separate lists."]},
 {heading:"Combine category and text filters",paragraphs:["A category filter narrows the set by project type. A search field can match the title, description, category, and tags. Applying both conditions together makes the results predictable."]},
 {heading:"Memoize derived results",paragraphs:["useMemo can keep the filtered list tied to only the active category and search query. For small portfolios this is optional, but it makes the relationship explicit and avoids recalculating on unrelated renders."]},
 {heading:"Make the empty state useful",paragraphs:["When no project matches, show a clear message and a reset control. A filter UI without an empty state feels broken when a search returns zero results."]}
 ]},
 {slug:"static-export-and-project-routes",title:"Static Export and Data-Driven Project Pages",excerpt:"Generating detail pages from project slugs while keeping a static deployment workflow.",date:"2026-11-20",readingTime:"4 min",tags:["Next.js","Architecture"],sections:[
 {heading:"Use stable slugs",paragraphs:["A project title can be converted into a URL slug by lowercasing it and replacing non-alphanumeric runs with hyphens. Keep the same slugging function for both links and route generation."]},
 {heading:"Generate the known routes",paragraphs:["With Next.js static export, dynamic routes need their paths known at build time. generateStaticParams returns one slug for each project in the data collection."]},
 {heading:"Reuse the same project record",paragraphs:["The detail route looks up the project using its slug and renders the existing description and tags. This avoids duplicating the core project information in route files."]},
 {heading:"Add richer details only when verified",paragraphs:["Screenshots, links, feature lists, dates, and implementation notes should be added from real project information. A detail page can be useful before every field is available, as long as missing details are clearly identified."]}
 ]},
 {slug:"contact-forms-on-static-sites",title:"Contact Forms on Static Sites: A Fallback That Works",excerpt:"A static site can offer a mail-app fallback or use a configured third-party form endpoint.",date:"2026-11-20",readingTime:"3 min",tags:["Web","Deployment"],sections:[
 {heading:"Static sites have no server handler by default",paragraphs:["When a site is exported to static files, a traditional server-side form handler is not included. The form needs a separate service or a client-side handoff."]},
 {heading:"Use a mail-app fallback",paragraphs:["A mailto link can prefill the recipient, subject, and message. It does not submit automatically; the visitor still sends the email in their mail application."]},
 {heading:"Configure a form provider",paragraphs:["A hosted form endpoint can receive submissions from the client. Keep the endpoint configurable and display sending, success, and failure states. Do not claim a message was sent until the provider confirms it."]},
 {heading:"Protect privacy and be transparent",paragraphs:["Tell visitors whether the form submits to a service or opens their email app. Avoid collecting information that is not needed for the conversation."]}
 ]}
];