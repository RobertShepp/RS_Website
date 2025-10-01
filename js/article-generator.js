// Article Generator - Helper script for creating new articles
class ArticleGenerator {
  constructor() {
    this.articlesManager = window.articlesManager;
  }

  // Generate a new article page from template
  generateArticlePage(articleData) {
    const article = {
      id: articleData.id || this.generateId(articleData.title),
      title: articleData.title,
      category: articleData.category || 'AI Projects',
      intro: articleData.intro,
      heroImage: articleData.heroImage || 'images/articles/hero-placeholder.jpg',
      cardImage: articleData.cardImage || 'images/articles/card-placeholder.jpg',
      date: articleData.date || new Date().toISOString().split('T')[0],
      readTime: articleData.readTime || '5 min read',
      featured: articleData.featured !== undefined ? articleData.featured : true
    };

    // Generate HTML content
    const htmlContent = this.articlesManager.generateArticlePage(article);
    
    return {
      article,
      htmlContent,
      filename: `articles/${article.id}.html`
    };
  }

  // Generate ID from title
  generateId(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Add new article to JSON data
  addArticleToData(articleData) {
    const newArticle = this.articlesManager.addArticle(articleData);
    
    // In a real implementation, you would save this to the JSON file
    // For now, we'll just return the updated data
    return this.articlesManager.articles;
  }

  // Create article from form data
  createArticleFromForm(formData) {
    const articleData = {
      title: formData.title,
      category: formData.category || 'AI Projects',
      intro: formData.intro,
      heroImage: formData.heroImage || 'images/articles/hero-placeholder.jpg',
      cardImage: formData.cardImage || 'images/articles/card-placeholder.jpg',
      featured: formData.featured === 'true'
    };

    return this.generateArticlePage(articleData);
  }
}

// Usage example and helper functions
window.ArticleGenerator = ArticleGenerator;

// Helper function to create a new article
window.createNewArticle = function(articleData) {
  const generator = new ArticleGenerator();
  const result = generator.generateArticlePage(articleData);
  
  console.log('New article created:', result.article);
  console.log('HTML content generated for:', result.filename);
  
  return result;
};

// Helper function to add article to data
window.addArticleToData = function(articleData) {
  const generator = new ArticleGenerator();
  return generator.addArticleToData(articleData);
};

// Example usage:
/*
// Create a new article
const newArticle = createNewArticle({
  title: "Advanced AI Techniques for Web Design",
  category: "AI Projects",
  intro: "Exploring cutting-edge AI techniques that are revolutionizing web design and user experience.",
  heroImage: "images/articles/ai-web-design.jpg",
  cardImage: "images/articles/ai-web-design-card.jpg",
  featured: true
});

// The article will automatically appear on:
// - Homepage (if featured: true and within top 4)
// - AI Projects page (all articles)
// - New article page at articles/advanced-ai-techniques-for-web-design.html
*/
