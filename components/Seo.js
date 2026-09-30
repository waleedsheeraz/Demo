import Head from "next/head";

const SITE_URL = "https://www.linkedin.com/in/adsgb/";
const TITLE = "Rob Hill — Control Systems Engineer";
const DESCRIPTION =
  "Control Systems Engineer specialising in Ignition SCADA, Allen-Bradley and Siemens PLCs, HMIs and historians. Based in Oughtershaw, England.";
const IMAGE_PATH = "/sample-portrait.webp";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rob Hill",
  jobTitle: "Control Systems Engineer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: IMAGE_PATH,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oughtershaw",
    addressCountry: "GB",
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "Howorth Air Technology Ltd",
    },
    {
      "@type": "Organization",
      name: "AUTOMATION DESIGN SERVICES LTD",
    },
  ],
  sameAs: ["https://www.linkedin.com/in/adsgb/"],
  knowsAbout: [
    "Ignition SCADA",
    "PLC programming",
    "Allen-Bradley",
    "Siemens TIA Portal",
    "HMI",
    "OPC UA",
    "MQTT",
  ],
};

export default function Seo() {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1f6b5c" />
      <meta name="author" content="Rob Hill" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="preload" as="image" href={IMAGE_PATH} type="image/webp" fetchPriority="high" />

      <meta property="og:type" content="profile" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE_PATH} />
      <meta property="og:locale" content="en_GB" />
      <meta property="profile:first_name" content="Rob" />
      <meta property="profile:last_name" content="Hill" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE_PATH} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
}
