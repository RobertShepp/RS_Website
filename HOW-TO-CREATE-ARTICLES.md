# How to Create New Articles

This guide shows you how to create new articles for your website using simple copy/paste.

---

## **Step 1: Prepare Your Image (16:9 ratio)**

1. Create or find an image that's **16:9 aspect ratio** (e.g., 1920x1080px, 1600x900px)
2. Save it as: `your-article-title-hero.jpg` or `.png`
3. Put it in the folder: `images/articles/`

**Tip:** You can use the same image for both the hero (top of article) and the card (homepage).

---

## **Step 2: Create the HTML File**

1. **Open** `articles/article-template.html` in Cursor
2. **Copy** the entire file
3. **Create a new file** in the `articles/` folder
4. **Name it** something like: `my-new-article.html` (use lowercase, dashes for spaces)
5. **Paste** the template content into your new file

---

## **Step 3: Edit the Content**

Edit these parts in your new HTML file:

### **Title** (line 6):
```html
<title>YOUR ARTICLE TITLE - Robert Sheppard</title>
```

### **Article Category** (line 76):
```html
<h4 class="article-category">AI Projects</h4>
```

### **Article Title** (line 77):
```html
<h1 class="article-title">YOUR ARTICLE TITLE</h1>
```

### **Article Introduction** (line 78):
```html
<h3 class="article-intro">Your introduction paragraph goes here...</h3>
```

### **Hero Image** (line 83):
```html
<img src="../images/articles/getting-started-hero.png" alt="Getting Started" ...>
```

### **Article Content** (lines 88-92):
Replace the example paragraphs with your own content:
```html
<div class="article-content col-span-4 col-span-tablet-8 col-span-desktop-10" style="grid-column: 1 / -1; grid-column: 2 / 12;">
    <p>Your first paragraph...</p>
    <p>Your second paragraph...</p>
    <p>And so on...</p>
</div>
```

**Tip:** Each `<p>` tag is a new paragraph. Just copy and paste `<p>Your text here</p>` for each paragraph you need.

---

## **Step 4: Add to articles.json**

1. **Open** `data/articles.json`
2. **Add** a new entry inside the `"articles": [...]` array:

```json
{
  "id": "my-new-article",
  "title": "My New Article Title",
  "category": "AI Projects",
  "date": "2025-10-04",
  "intro": "Your introduction paragraph...",
  "filename": "my-new-article.html",
  "heroImage": "../images/articles/my-new-article-hero.jpg",
  "cardImage": "../images/articles/my-new-article-hero.jpg",
  "readTime": "5 min read",
  "featured": true
}
```

**Important:** 
- Add a **comma** after the previous article entry (before your new one)
- The `"id"` should match your HTML filename (without `.html`)
- Use the same image path for both `heroImage` and `cardImage`

---

## **Step 5: Test Your Article**

1. Open `index.html` in your browser
2. Check if your article appears on the homepage
3. Click "Read Article" to view the full article
4. Check that the image displays correctly

---

## **Quick Reference**

### **File Locations:**
- Article HTML files: `articles/my-article.html`
- Article images: `images/articles/my-article-hero.jpg`
- Article metadata: `data/articles.json`

### **HTML Tags You'll Use:**
- `<p>Text</p>` = Paragraph
- `<h4>Text</h4>` = Small heading
- `<h1>Text</h1>` = Main title
- `<h3>Text</h3>` = Subtitle/intro
- `<img src="path/to/image.jpg" alt="Description">` = Image

---

## **Example: Creating "My First Article"**

1. **Image:** Save `my-first-article-hero.jpg` to `images/articles/`
2. **HTML:** Copy `article-template.html` → save as `articles/my-first-article.html`
3. **Edit:** Change title, intro, content, and image path in the HTML
4. **JSON:** Add entry to `articles.json` with `"id": "my-first-article"`
5. **Test:** Open `index.html` in browser

---

## **Need Help?**

If you get stuck:
1. Check that filenames match between JSON and HTML (without `.html` in JSON)
2. Check that image paths are correct (`../images/articles/...` from HTML files)
3. Make sure JSON has proper commas between entries
4. Ask me for help! Just describe what's not working.

---

**That's it!** You're now ready to create articles manually. It's simple copy/paste and edit. 🎉

