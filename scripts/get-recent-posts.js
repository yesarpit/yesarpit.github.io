const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../blog');
const outputFile = path.join(__dirname, '../src/data/recentPosts.json');

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  const data = {};
  if (match) {
    const lines = match[1].split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        let value = valueParts.join(':').trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        data[key.trim()] = value;
      }
    });
  }
  return data;
}

if (!fs.existsSync(blogDir)) {
  console.error('Blog directory not found');
  process.exit(1);
}

const files = fs.readdirSync(blogDir)
  .filter(file => file.endsWith('.md'))
  .sort()
  .reverse()
  .slice(0, 3);

const recentPosts = files.map(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const data = parseFrontmatter(content);
  
  const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = data.date || (dateMatch ? dateMatch[1] : '');
  
  return {
    title: data.title || file,
    slug: data.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', ''),
    date: date,
    description: data.description || ''
  };
});

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}
fs.writeFileSync(outputFile, JSON.stringify(recentPosts, null, 2));
console.log('Generated recentPosts.json');
