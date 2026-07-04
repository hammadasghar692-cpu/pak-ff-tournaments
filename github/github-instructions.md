# Connecting Your FF Tournament Project to GitHub

This guide provides simple, step-by-step instructions to upload your **FF Tournament** web application to your own GitHub repository.

---

## 🚀 Step-by-Step GitHub Setup

### 1️⃣ Initialize Git on Your Machine
If you have downloaded this project as a ZIP or exported it, open your terminal inside the project root folder and run:
```bash
# Initialize git repository
git init

# Add all project files
git add .

# Commit files
git commit -m "Initial commit of FF Tournament Web App"
```

### 2️⃣ Create a New Repository on GitHub
1. Go to your [GitHub Dashboard](https://github.com/) and click the **New** button (or go to `https://github.com/new`).
2. Name your repository (e.g., `ff-tournament-app`).
3. Keep the repository **Public** or **Private** as per your choice.
4. **Do NOT** check "Add a README file", "Add .gitignore", or "Choose a license" (since these files are already included in your project).
5. Click **Create repository**.

### 3️⃣ Link and Push the Project
Copy the commands from the GitHub success screen or run the following inside your project folder:
```bash
# Rename default branch to main
git branch -M main

# Link to your remote GitHub repository (Replace with your actual GitHub link)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code
git push -u origin main
```

---

## 📂 Project Assets & Image Uploads
You can customize the logo and the phone mockup screens directly by replacing the files inside the `src/images/` folder:

| Filename | Purpose | Recommended Size | Description |
| :--- | :--- | :--- | :--- |
| `logo.png` | App Logo | 512x512 px | Used in navigation header, footer, and loading screens. |
| `home.png` | Screen 1 (Home) | 1080x2400 px | Screenshot of the dashboard showing active wallet balance. |
| `matches.png` | Screen 2 (Lobby) | 1080x2400 px | Screenshot of the tournaments list lobby. |
| `details.png` | Screen 3 (Details) | 1080x2400 px | Screenshot of a custom match details description screen. |
| `about.png` | Screen 4 (About/WA) | 1080x2400 px | Screenshot of the community hub or join WhatsApp group. |

---

## 🛠️ How to Update and Push Future Changes
Whenever you make updates to the code or upload new photos, run these commands to push them to GitHub:
```bash
# Add all changes
git add .

# Commit changes
git commit -m "Updated screen screenshots and logo"

# Push to main
git push origin main
```
