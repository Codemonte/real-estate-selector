
#  Real Estate Floor Selector

An interactive web-based tool for selecting towers, exploring their floors, and viewing apartment layouts — built to simulate a real estate booking or property showcasing experience.

---

##  Features

- **Tower Overview** — Select from available towers with visual thumbnails.
- **Floor Navigation** — Choose floors dynamically per tower.
- **Layout Preview** — See apartment layout thumbnails and basic details.
- **Layout Detail View** — Zoom into individual layouts for more insight.
- **Smooth Transitions** — Page animations using Framer Motion.
- **Back Navigation** — Intuitive user navigation flow with consistent UI.

---

##  Built With

- **React** (TypeScript) — Frontend framework
- **React Router v6** — Routing and dynamic path parameters
- **Framer Motion** — Smooth animated transitions between pages
- **CSS Modules** — Custom styling
- **Mock Data** — Simulated real estate data (towers, floors, layouts)

---

##  Live Demo

 [Live Demo on Vercel](https://real-estate-selector-eight.vercel.app/) 

---

## Project Walkthrough

[Watch the 1–2 minute walkthrough](https://www.loom.com/share/462fa677d50045c1935b2050f60f32ca?sid=f19302f6-957e-4b15-8b2c-b1eba3e80012) 

---

## Folder Structure

```

src/
├── components/        // Reusable UI components (e.g. Header, BackButton)
├── data/              // Mock data for towers, floors, layouts
├── pages/             // TowerOverview, FloorView, LayoutsView, LayoutDetailView
├── App.tsx            // Main app logic and animated routing
├── index.tsx          // Entry point

````

---

## Known Limitations

- Currently uses mock data — not connected to a backend or API.
- No mobile responsiveness (optional to add).
- Image thumbnails are statically referenced and must be stored locally in `public/`.

---

## 💻 Getting Started

### Clone & Run Locally

```bash
git clone https://github.com/Codemonte/real-estate-selector.git
cd real-estate-selector
npm install
npm start
````

The app will run on `http://localhost:3000`.

---

## Acknowledgments

Inspired by modern real estate selection tools and interactive floor selectors.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).