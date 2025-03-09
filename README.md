# Personal Portfolio Website

A modern, responsive portfolio website showcasing your skills, projects, and achievements in Data Science, MLOps, and Data Engineering.

## Features

- Clean and modern design with blue and gray color scheme
- Fully responsive layout
- Smooth scrolling and animations
- Project categorization by field (MLOps, Data Science, Data Engineering)
- Skills section with categorized abilities
- Timeline-based experience section
- Achievements and activities sections
- Contact information and social links
- Mobile-friendly navigation

## Setup

1. Clone this repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

2. Customize the content:
   - Replace "Your Name" in index.html
   - Add your profile picture (replace profile-placeholder.jpg)
   - Update social media links
   - Add your projects to the project grid
   - Update skills, experience, and achievements
   - Add your contact information

3. Deploy to GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "main" branch as source
   - Save and wait for deployment

## Customization

### Colors
The color scheme can be modified in `styles.css`. Look for the `:root` section:
```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #3b82f6;
    --light-blue: #60a5fa;
    --dark-gray: #1f2937;
    --medium-gray: #4b5563;
    --light-gray: #9ca3af;
    --background: #f8fafc;
}
```

### Adding Projects
Add your projects in the project grid sections in `index.html`. Example structure:
```html
<div class="project-grid">
    <div class="project-card">
        <h4>Project Title</h4>
        <p>Project description</p>
        <div class="project-links">
            <a href="#">GitHub</a>
            <a href="#">Demo</a>
        </div>
    </div>
</div>
```

### Adding Skills
Add your skills in the skills section. Example:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
</div>
```

## License

MIT License - feel free to use this template for your own portfolio! 