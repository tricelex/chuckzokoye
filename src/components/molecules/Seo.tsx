import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

interface IProps {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: string[] | undefined;
  title: string;
}

const SeoHelmet = ({ description, lang, meta, title, keywords }: IProps) => {
  let titleTemplate = `Chuckz Okoye | Software Developer${
    title !== 'Home' ? ' » %s' : ''
  }`;

  switch (title) {
    case 'Home':
      titleTemplate = 'Chuckz Okoye - Software Developer';
      break;
    case 'About':
      titleTemplate = 'About Chuckz Okoye - Software Developer';
      break;
    case 'Contact':
      titleTemplate = 'Contact Chuckz Okoye - Software Developer';
      break;
    case 'Portfolio':
      titleTemplate =
        'Portfolio - Work samples of Chuckz Okoye (Software Developer)';
      break;
    default:
      titleTemplate = `Chuckz Okoye | Software Developer${
        title !== 'Home' ? ' » %s' : ''
      }`;
  }

  const metaDescription =
    description ||
    'Software Developer with a focus on Python and JavaScript. Many years experience working in software engineering.';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `Chuckz Okoye`,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: `https://res.cloudinary.com/tricelex/image/upload/c_scale,q_100,r_20,w_1698/v1588064752/chuckzokoye/chuckzokoye.jpg`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://chuckzokoye.com/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Chuckz Okoye',
        },
        {
          name: `twitter:image`,
          content: `https://res.cloudinary.com/tricelex/image/upload/c_scale,q_100,r_20,w_1698/v1588064752/chuckzokoye/chuckzokoye.jpg`,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      script={[
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"WebSite","name":"chuckzokoye.com","alternateName":"ChuckzOkoye","url":"https://chuckzokoye.com/","description":"Back-End Software Engineer with a focus on Python and JavaScript. Many years experience working in software engineering.","image":"https://res.cloudinary.com/tricelex/image/upload/c_scale,h_1080,w_1980/v1596106614/chuckzokoye/chuckzokoye_vf6uuk.png"}`,
        },
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/tricelex/image/upload/c_scale,q_100,r_20,w_1698/v1588064752/chuckzokoye/chuckzokoye.jpg","name":"Chuckz Okoye","alternateName":"ChuckzOkoye","url":"https://chuckzokoye.com/","jobTitle":["Software Developer","Web Developer","Backend Engineer", "Back-End Developer"],"hasOccupation":{"@type":"Occupation","name":"Software Developer","occupationLocation":{"@type":"City","name":"Lagos"},"description":"Develops web applications and websites using JavaScript, Python and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Python, Django, Node.js, Gatsby, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, E-Commerce","alternateName":["Backend Developer","Full Stack Developer","Backend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Backend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/chuckzokoye","http://twitter.com/chuckzokoye","https://github.com/tricelex","https://web.facebook.com/KingChukz","https://instagram.com/chuckzokoye"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Software Developer"},{"@type":"Brand","name":"Chuckz Okoye","alternateName":"ChuckzOkoye"}],"memberOf":[{"@type":"Organization","url":"https://chuckzokoye.com/","name":"Kingsway Agency Ltd","alternateName":"Kingsway Agency"},{"@type":"Organization","url":"https://chuckzokoye.com/","name":"Kingsway Media","alternateName":"kingsway"}],"homeLocation":{"@type":"City","name":"Lagos"},"owns":{"@type":"Organization","url":"https://chuckzokoye.com/","name":"Kingsway Agency Ltd","alternateName":"Kingsway Agency","sameAs":"https://www.linkedin.com/in/chuckzokoye"}}}`,
        },
      ]}
    />
  );
};

SeoHelmet.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SeoHelmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SeoHelmet;
