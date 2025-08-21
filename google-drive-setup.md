# Auto-Loading Google Drive Photo Gallery Setup

## 🚀 Quick Start (Demo Mode)
Your gallery now **automatically loads photos when you open the page!**
- Photos load from Google Drive automatically on page load
- No buttons to click - completely automatic
- Refresh button available to reload photos from Drive

## 🔧 Setup for Your Own Google Drive Folder

### Step 1: Get Your Google Drive Folder Ready
1. Create a folder in Google Drive with your photos
2. **Right-click the folder** → "Share" → "Get link"
3. Set permissions to "Anyone with the link can view"
4. Copy the folder ID from the URL

**Example URL:** `https://drive.google.com/drive/folders/1ABCdefGHIjklMNOpqrSTUvwxyz123456`
**Folder ID:** `1ABCdefGHIjklMNOpqrSTUvwxyz123456`

### Step 2: Get a Google API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Drive API**
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### Step 3: Configure the Gallery
Open your `index.html` file and make these changes:

1. **Replace the folder ID:**
```javascript
// Find this line (around line 337):
let googleDriveFolderId = 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE';

// Replace with your actual folder ID:
let googleDriveFolderId = '1ABCdefGHIjklMNOpqrSTUvwxyz123456';
```

2. **Replace the API key:**
```javascript
// Find this line (around line 388):
const apiKey = 'YOUR_API_KEY';

// Replace with your actual API key:
const apiKey = 'AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```

### Step 4: Done! 
- Refresh your page and photos will auto-load from Google Drive
- No manual input required - completely automatic!

## 🎯 How It Works
- **Auto-loads on page open** - Photos appear automatically
- **Smart caching** - Only reloads from Drive once per hour (configurable)
- **Refresh button** - Manually reload photos anytime
- **Mixed content** - Local uploads + Drive photos work together
- **Loading states** - Shows "Loading..." while fetching

## 🔒 Security & Performance
- API calls are limited to once per hour to avoid quota issues
- Photos are cached locally for faster loading
- Folder must be publicly accessible
- Consider rate limiting for production use

## � Current Features
- ✅ **Fully automatic loading** - No user interaction needed
- ✅ **Smart refresh** - Avoids excessive API calls
- ✅ **Loading indicators** - User-friendly feedback
- ✅ **Error handling** - Falls back to demo photos if API fails
- ✅ **Mixed sources** - Drive + local photos together
- ✅ **All gallery features** - Zoom, filters, delete, etc.

## � Troubleshooting
- **Demo photos appear**: You're in demo mode - configure your folder ID and API key
- **"Loading..." forever**: Check your API key and folder permissions
- **No photos**: Ensure folder contains image files and is publicly accessible
- **API errors**: Verify quota limits and folder ID format
