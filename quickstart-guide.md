# Getting Started: Your Website Toolkit

## A Plain-English Guide for Non-Developers

Welcome! This guide will walk you through everything you need to manage and update your website. No prior coding experience required—we'll explain everything in everyday terms.

---

## Table of Contents

1. [Understanding the Basics](#understanding-the-basics)
2. [Setting Up Your Computer](#setting-up-your-computer)
3. [Installing Claude Code](#installing-claude-code)
4. [Getting Your Website Files](#getting-your-website-files)
5. [Making Your First Update](#making-your-first-update)
6. [Publishing Changes](#publishing-changes)
7. [Managing Your Contact Form](#managing-your-contact-form)
8. [Common Tasks](#common-tasks)
9. [Troubleshooting](#troubleshooting)

---

## Understanding the Basics

Before we dive in, let's understand a few concepts using everyday analogies.

### What is a Website, Really?

Think of your website like a **house**:
- The **HTML files** are the rooms and walls—the structure
- The **CSS files** are the paint, furniture, and decorations—how it looks
- The **JavaScript files** are the electrical systems—things that move or respond
- The **images folder** is like your photo albums stored in a closet

When someone visits your website, they're essentially walking through your digital house.

### What is GitHub?

GitHub is like a **safety deposit box** for your website files. It:
- Keeps a backup of everything
- Remembers every change you've ever made (like a time machine)
- Lets you undo mistakes by going back to a previous version

When you hear "push to GitHub," think of it as "put my updated files in the safety deposit box."

### What is Netlify?

Netlify is like a **publishing company** for your website. It:
- Takes your files from GitHub
- Puts them on the internet so anyone can visit
- Automatically updates your live website whenever you make changes

The magic part: once set up, Netlify watches your GitHub. When you update GitHub, Netlify automatically publishes the changes. It's like having a publisher who instantly prints a new edition of your book whenever you revise a chapter.

### What is Claude Code?

Claude Code is like having a **friendly assistant who speaks both English and computer**. You tell it what you want in plain language:

> "Change the phone number to 972-555-1234"

And it translates that into the actual code changes, makes them for you, and can even help you publish them.

---

## Setting Up Your Computer

### Step 1: Install Visual Studio Code (VS Code)

VS Code is a free program for viewing and editing website files. Think of it as Microsoft Word, but for code.

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click the big download button
3. Open the downloaded file and follow the installation steps
4. Open VS Code when it's done

**That's it!** You now have a place to view your website files.

### Step 2: Install Node.js

Node.js is a behind-the-scenes helper that Claude Code needs to run. You won't interact with it directly.

1. Go to [nodejs.org](https://nodejs.org)
2. Click the button that says "LTS" (this means "Long Term Support"—the stable version)
3. Open the downloaded file and follow the installation steps
4. When asked about options, just keep the defaults

**How to verify it worked:**
1. On Mac: Open "Terminal" (search for it in Spotlight)
2. On Windows: Open "Command Prompt" (search for it in Start menu)
3. Type `node --version` and press Enter
4. You should see a version number like `v20.10.0`

If you see a version number, you're good!

### Step 3: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign Up"
3. Follow the steps to create your account
4. Remember your username and password!

### Step 4: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up"
3. Choose "Sign up with GitHub" (this connects the two accounts automatically)
4. Authorize Netlify to access your GitHub

---

## Installing Claude Code

Claude Code is a tool that lets you talk to Claude directly from your computer's command line (Terminal on Mac, Command Prompt on Windows).

### Installation Steps

1. Open Terminal (Mac) or Command Prompt (Windows)

2. Type this command and press Enter:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   
   *What this does: It downloads and installs Claude Code on your computer. The `-g` means "global"—install it so it works everywhere, not just in one folder.*

3. Wait for it to finish (you'll see some text scrolling by, then it will stop and show your cursor again)

4. Type this to verify it worked:
   ```
   claude --version
   ```
   
   You should see a version number.

### Connecting Claude Code to Your Account

1. Type `claude` and press Enter
2. It will ask you to log in—follow the prompts
3. A browser window may open asking you to authorize Claude Code
4. Once authorized, you're connected!

---

## Getting Your Website Files

Your website files need to live on your computer so you can edit them. Here's how to get them:

### First Time Setup

1. **Open Terminal/Command Prompt**

2. **Navigate to where you want to keep your website**
   
   Think of Terminal as a text-based way to move through your computer's folders.
   
   Type this to go to your Documents folder:
   ```
   cd Documents
   ```
   
   *`cd` means "change directory"—it's like double-clicking a folder.*

3. **Download your website from GitHub**
   
   ```
   git clone https://github.com/YOUR-USERNAME/high-ridge-advisory.git
   ```
   
   *`git clone` means "make a copy of this project on my computer." Replace YOUR-USERNAME with your actual GitHub username.*

4. **Go into your website folder**
   ```
   cd high-ridge-advisory
   ```

5. **Open it in VS Code**
   ```
   code .
   ```
   
   *The dot means "this folder." So you're saying "open this folder in VS Code."*

Now you should see all your website files in VS Code!

---

## Making Your First Update

Let's make a simple change to prove everything works.

### Using Claude Code to Make Changes

1. **Open Terminal and navigate to your website folder**
   ```
   cd Documents/high-ridge-advisory
   ```

2. **Start Claude Code**
   ```
   claude
   ```

3. **Ask Claude to make a change**
   
   Type something like:
   > Change the phone number in the footer to 972-555-9999

4. **Claude will:**
   - Find the right file
   - Show you what it plans to change
   - Ask if you want to proceed
   - Make the change

5. **Review the change**
   
   Claude will show you a "diff"—a before/after comparison. Lines being removed are shown in red, lines being added are shown in green.

6. **Approve the change**
   
   Type `yes` or `y` to confirm.

### Viewing Your Changes Locally

Want to see how your website looks before publishing?

1. Find your `index.html` file in VS Code
2. Right-click on it
3. Select "Open with Live Server" (if you have that extension) 
   OR simply double-click the file to open it in your web browser

---

## Publishing Changes

Once you're happy with your changes, you need to:
1. Save them to GitHub (your backup)
2. Netlify will automatically publish them (this happens automatically!)

### The Three Magic Commands

After making changes, run these three commands in Terminal:

```bash
git add .
```
*"Hey Git, notice all the files I changed." The dot means "all of them."*

```bash
git commit -m "Updated phone number"
```
*"Package up these changes with a note about what I did." The message in quotes is your note to yourself.*

```bash
git push
```
*"Send this package to GitHub."*

### What Happens Next

1. GitHub receives your changes (takes about 2 seconds)
2. Netlify notices GitHub updated (takes about 5 seconds)
3. Netlify rebuilds your site (takes about 30-60 seconds)
4. Your live website is updated!

**You can watch this happen:**
1. Log into [netlify.com](https://netlify.com)
2. Click on your site
3. Look for "Production deploys"
4. You'll see "Building" → "Published"

---

## Managing Your Contact Form

When someone fills out your contact form, Netlify collects the submission.

### Viewing Form Submissions

1. Log into [netlify.com](https://netlify.com)
2. Click on your site (high-ridge-advisory)
3. In the left sidebar, click **"Forms"**
4. Click on **"contact"** (your form name)
5. You'll see a list of all submissions with:
   - Name
   - Email
   - Phone
   - Message
   - Timestamp

### Setting Up Email Notifications

Want to get an email when someone submits the form?

1. In Netlify, go to **Site settings**
2. Click **Forms** in the sidebar
3. Click **Form notifications**
4. Click **Add notification**
5. Select **Email notification**
6. Enter your email address
7. Save

Now you'll get an email every time someone submits the contact form!

---

## Common Tasks

Here are example prompts you can use with Claude Code for common updates:

### Changing Text

> "Change the homepage headline to 'Trusted Wealth Management Since 1997'"

> "Update Jay Madden's title from 'Founder & Lead Advisor' to 'Founder & Managing Partner'"

> "Change the email address to newemail@highridgeadvisory.com everywhere it appears"

### Updating Services

> "Add a new service called 'Cryptocurrency Planning' to the Family Wealth Solutions section"

> "Remove 'Guaranteed Income & Annuity Planning' from the services list"

> "Change 'Tax Planning & Minimization Strategies' to 'Tax Optimization Strategies'"

### Team Updates

> "Add a new team member: Sarah Johnson, Client Relations Manager, with bio: 'Sarah brings 10 years of client service experience...'"

> "Update Eric Caisse's bio to mention he joined the firm in 2015"

> "Remove Kyle Harrison from the team page"

### Images

> "Update the homepage hero image to use new-hero.jpg from the images folder"

> "Change Jay Madden's headshot to jay-2024.jpg"

*Note: You need to first add the new image file to your `images` folder, then ask Claude to update the reference.*

### Adding Images to Your Site

1. Find your image file on your computer
2. Drag it into the `images` folder in VS Code
3. Ask Claude: "Update [location] to use [filename]"

### Links

> "Update the 'Book a Meeting' button to link to https://newscheduler.com/highridge"

> "Change the Orion client portal link to https://newportal.orionadvisor.com"

---

## Troubleshooting

### "Command not found: claude"

Claude Code isn't installed properly. Try reinstalling:
```
npm install -g @anthropic-ai/claude-code
```

### "Command not found: git"

Git isn't installed. 
- **Mac:** Open Terminal and type `xcode-select --install`
- **Windows:** Download from [git-scm.com](https://git-scm.com)

### "Permission denied" errors

On Mac, you might need to add `sudo` before commands:
```
sudo npm install -g @anthropic-ai/claude-code
```
Then enter your computer's password.

### Changes aren't showing on the live site

1. Did you run all three commands? (`git add .`, `git commit -m "message"`, `git push`)
2. Check Netlify—is the build still in progress?
3. Try a "hard refresh" in your browser: 
   - Mac: Cmd + Shift + R
   - Windows: Ctrl + Shift + R

### "Merge conflict" errors

This happens when changes conflict with each other. Type this to Claude:
> "I'm getting a merge conflict error. Can you help me resolve it?"

### Site looks broken after an update

Don't panic! You can undo:
```
git revert HEAD
git push
```
This undoes your last change. Then ask Claude to help figure out what went wrong.

---

## Quick Reference Card

Print this out and keep it handy!

```
┌─────────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  START CLAUDE CODE                                          │
│  cd Documents/high-ridge-advisory                           │
│  claude                                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PUBLISH CHANGES                                            │
│  git add .                                                  │
│  git commit -m "describe your change"                       │
│  git push                                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VIEW FORM SUBMISSIONS                                      │
│  1. netlify.com → Your site → Forms → contact              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  UNDO LAST CHANGE                                           │
│  git revert HEAD                                            │
│  git push                                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HELPFUL WEBSITES                                           │
│  • GitHub: github.com                                       │
│  • Netlify: netlify.com                                     │
│  • VS Code: code.visualstudio.com                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Getting Help

### If Claude Code isn't understanding you:
- Be more specific: "Change the phone number in the footer" is better than "update contact info"
- Mention the page: "On the About page, change..."
- Describe what you see: "There's a button that says X, change it to say Y"

### If something breaks:
1. Don't make more changes
2. Take a screenshot of any error messages
3. Run `git revert HEAD` and `git push` to undo
4. Contact your developer for help

### If you're stuck:
Remember, you can always ask Claude Code questions like:
> "What files make up the navigation menu?"
> "Where is the phone number stored?"
> "How do I add a new image?"

Claude can explain the codebase to you, not just make changes.

---

## You've Got This!

Website management might feel intimidating at first, but with Claude Code, you're having a conversation, not writing code. The more you use it, the more natural it will feel.

Start with small changes—update a phone number, change some text. Build confidence. Before you know it, you'll be making updates like a pro.

Welcome to the world of managing your own website! 🎉
