# ActivityWatch Setup Guide

ActivityWatch is a free, open-source, privacy-focused time tracker that runs locally and keeps unlimited history.

## Installation (Linux/WSL)

```bash
# Download latest release
wget https://github.com/ActivityWatch/activitywatch/releases/download/v0.13.1/activitywatch-v0.13.1-linux-x86_64.zip

# Unzip to home directory
unzip activitywatch-v0.13.1-linux-x86_64.zip -d ~/

# Run it
~/activitywatch/aw-qt
```

## What It Tracks Automatically

- Active window/application
- Window titles (shows file paths → project detection)
- AFK time (keyboard/mouse idle)

## VS Code Integration (Recommended)

For coding project tracking, install the VS Code watcher:

```bash
code --install-extension activitywatch.aw-watcher-vscode
```

This reports which files/projects you're editing directly to ActivityWatch.

## Access Your Data

- **Web UI:** http://localhost:5600
- All data stored locally (unlimited history)
- Export anytime as JSON (Raw Data → Export all buckets)

## Set Up Project Categories

In the web UI Settings, create rules to group time by project:

1. Go to http://localhost:5600/#/settings/categorization
2. Add a new category rule:
   - **Name:** "HRA Website"
   - **Rule:** `regex:High-Ridge`
3. Repeat for other projects

## Autostart on Boot

Add to your shell profile so it runs automatically:

```bash
echo '~/activitywatch/aw-qt &' >> ~/.profile
```

Or use your desktop environment's autostart settings.

## Resources

- [Official Documentation](https://docs.activitywatch.net/en/latest/getting-started.html)
- [GitHub Repository](https://github.com/ActivityWatch/activitywatch)
- [Official Website](https://activitywatch.net/)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=activitywatch.aw-watcher-vscode)
