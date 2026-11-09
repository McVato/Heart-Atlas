# Segmental Heart Atlas: setting up the phone app

This folder is a complete, self-contained web app. Once it is on a web address, anyone can open that address, add the app to their phone's home screen, and use it without a connection after the first visit.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The app itself |
| `jspdf.umd.min.js`, `svg2pdf.umd.min.js` | PDF libraries, included so export works offline |
| `manifest.webmanifest` | App name, icon and colors for "Add to Home Screen" |
| `sw.js` | Offline support: keeps a copy of the app on the device |
| `icons/` | Home-screen icons |

## 1. Put it on a web address (one time)

The folder must be served over **https** (offline support and installing don't work from a plain file or http). Two straightforward options:

**A. Your institution's web hosting (IT).** Give IT this folder and ask for it to be published as static files at an https address, for example `https://<your-site>/heart-atlas/`. There's no server code, database, or login, and nothing is stored.

**B. GitHub Pages (free, about 10 minutes).**
1. Create a free account at github.com and click **New repository**. Name it, for example, `heart-atlas`, set it to Public, and create it.
2. On the repository page choose **Add file → Upload files**, drag in everything inside this folder (keep the `icons` folder), and click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
4. After a minute the page shows your address, for example `https://<username>.github.io/heart-atlas/`.

## 2. Install it on a phone

- **iPhone / iPad:** open the address in **Safari** → Share button → **Add to Home Screen** → Add.
- **Android:** open the address in **Chrome** → menu (⋮) → **Install app** (or **Add to Home screen**).

Open it once while online; after that it works with no signal. To share it, send people the address.

## 3. Exporting a PDF

**Export PDF** builds a one-page, letter-size PDF on the device.
- **On a phone:** the share sheet opens, so you can save it to Files, AirDrop it, print it, or attach it to a message.
- **On a computer:** it downloads like any file.

## 4. Updating the app later

Replace the files at the web address with the new ones, and in `sw.js` change the line `const VERSION = "atlas-2026-11-09";` to a new value (for example today's date). Each phone picks up the new version on its next online visit and uses it from the visit after that.

## Privacy

Everything runs on the device. Nothing is sent anywhere or saved by the app. The patient name, MRN and notes fields are used only to build the exported PDF, and they are cleared when the app is closed. Check your institution's policy on where exported PDFs containing patient identifiers may be kept or sent.

Schematic diagrams, not to scale.
