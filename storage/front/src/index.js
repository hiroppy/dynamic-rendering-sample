const a = document.createElement('a');

a.setAttribute('href', 'https://observablehq.com/@d3/hierarchical-edge-bundling');
a.text = 'This is hierarchical-edge-bundling, the code is here.';

document.body.append(a);

// ogp
const props = [
  {
    type: 'og:url',
    content: 'http://localhost:8080'
  },
  {
    type: 'og:type',
    content: 'website'
  },
  {
    type: 'og:title',
    content: 'rendertron-sample'
  },
  {
    type: 'og:description',
    content: 'if you can see this on html, rendertron succeeded!'
  },
  {
    type: 'og:site_name',
    content: 'rendertron-sample'
  },
  {
    type: 'og:image',
    content: 'image'
  }
];

const fragment = document.createDocumentFragment();

props.forEach(({ type, content }) => {
  const meta = document.createElement('meta');

  meta.setAttribute('property', type);
  meta.setAttribute('content', content);

  fragment.appendChild(meta);
});

document.querySelector('head').appendChild(fragment);